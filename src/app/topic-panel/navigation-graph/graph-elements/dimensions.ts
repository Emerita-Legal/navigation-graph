import { Circle } from './circle';
import { Position } from './layout';

const RADIUS_FACTOR = 3.9;
const NODE_SIZE_FACTOR = 53;
const OUTER_NODES_RADIUS_SCALE_FACTOR = 1.4;
const INNER_NODES_RADIUS_SCALE_FACTOR = 0.65;

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
    this.radius =
      options?.radius ?? Math.min(this.width, this.height) / RADIUS_FACTOR;
    this.center = Circle.calculateCenter(this.width, this.height);
    this.nodeBaseSize = options?.nodeBaseSize ?? this.width / NODE_SIZE_FACTOR;
  }

  getCenter(): Position {
    return { ...this.center };
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
    return (
      this.radius * INNER_NODES_RADIUS_SCALE_FACTOR - this.nodeBaseSize * 1.5
    );
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
    return this.getOuterNodesRadius() - this.getInnerNodesRadius();
  }

  getInnerlabelMargin(): number {
    return this.radius * 0.1;
  }

  getOuterLabelSize(): number {
    return this.getOuterNodesRadius() / 2.75;
  }

  getOuterLabelMargin(): number {
    return this.radius * 0.05;
  }
}
