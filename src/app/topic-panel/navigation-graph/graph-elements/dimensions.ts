import { Circle } from './circle';
import { Position } from './layout';

const RADIUS_FACTOR = 5;
const NODE_SIZE_FACTOR = 53;
const OUTER_NODES_RADIUS_SCALE_FACTOR = 1.4;
const INNER_NODES_RADIUS_SCALE_FACTOR = 0.65;
/*TODO: Relative to screen */
const LABEL_MARGIN = 20;
const OUTER_LABEL_MAX_WIDTH = 85;
const INNER_LABEL_MAX_WIDTH = 200;

export class Dimensions {
  private radius: number;
  private center: Position;
  private nodeBaseSize: number;
  constructor(
    private height: number,
    private width: number,
    options?: {
      radius?: number;
      nodeBaseSize?: number;
    }
  ) {
    this.radius = options?.radius ?? this.width / RADIUS_FACTOR;
    this.center = Circle.calculateCenter(this.width, this.height);
    this.nodeBaseSize = options?.nodeBaseSize ?? this.width / NODE_SIZE_FACTOR;
  }

  getCenter(): Position {
    return this.center;
  }

  getNodeBaseSize(): number {
    return this.nodeBaseSize;
  }

  getOuterNodesRadius(): number {
    return this.radius * OUTER_NODES_RADIUS_SCALE_FACTOR;
  }

  getInnerNodesRadius(): number {
    return this.radius * INNER_NODES_RADIUS_SCALE_FACTOR;
  }

  getCentralNodeSize(): number {
    return this.radius * INNER_NODES_RADIUS_SCALE_FACTOR - this.nodeBaseSize;
  }

  getInnerNodeSize(): number {
    return this.nodeBaseSize;
  }

  getOuterNodeSize(): number {
    return this.nodeBaseSize / 2;
  }

  getCentralLabelSize(): number {
    return this.getCentralNodeSize();
  }

  getInnerLabelSize(): number {
    return INNER_LABEL_MAX_WIDTH;
  }

  getInnerlabelMargin(): number {
    return LABEL_MARGIN;
  }

  getOuterLabelSize(): number {
    return OUTER_LABEL_MAX_WIDTH;
  }

  getOuterLabelMargin(): number {
    return LABEL_MARGIN;
  }
}
