import { Circle, Quarter } from './circle';
import { Curve, CurveType } from './curve';
import { Edge } from './edge';
import { Graph, HierarchyLevels } from './graph';
import { Node } from './node';

const DEFAULT_LAYOUT_WIDTH = 1200;
const RADIUS_FACTOR = 4.5;
const NODE_SIZE_FACTOR = 53;
const OUTER_NODES_RADIUS_SCALE_FACTOR = 1.4;
const INNER_NODES_RADIUS_SCALE_FACTOR = 0.65;
const LABEL_MARGIN = 20;
/*TODO: Relative to screen */
const OUTER_LABEL_MAX_WIDTH = 85;
const INNER_LABEL_MAX_WIDTH = 200;
const CENTRAL_LABEL_MAX_WIDTH = 300;

const LABEL_MAX_HEIGHT = 50;

export type Position = { x: number; y: number };

export type Label = {
  text: string;
  position: Position;
  size: string;
  rotation: number;
  isBold: boolean;
  width: number;
  align?: 'left' | 'right' | 'center';
};
export type LayoutContext = d3.Selection<
  d3.BaseType,
  unknown,
  HTMLElement,
  any
>;
export type PathContext = d3.Selection<
  SVGPathElement,
  unknown,
  HTMLElement,
  any
>;

export class Layout {
  private width: number;
  private height: number;
  private radius: number;
  private center: Position;
  private graph: Graph;
  private SVGContext: LayoutContext;
  private nodeBaseSize: number;

  constructor(
    graph: Graph,
    SVGContext: LayoutContext,
    options?: {
      height?: number;
      width?: number;
      radius?: number;
      nodeBaseSize?: number;
    }
  ) {
    this.graph = graph;
    this.SVGContext = SVGContext;
    this.width = options?.width ?? DEFAULT_LAYOUT_WIDTH;
    this.height = options?.height ?? this.width;
    this.radius = options?.radius ?? this.width / RADIUS_FACTOR;
    this.center = Circle.calculateCenter(this.width, this.height);
    this.nodeBaseSize = options?.nodeBaseSize ?? this.width / NODE_SIZE_FACTOR;
  }

  public draw() {
    this.drawCircumference(300, OUTER_NODES_RADIUS_SCALE_FACTOR, {
      class: 'outerEdge',
    });
    this.drawCircumference(10, INNER_NODES_RADIUS_SCALE_FACTOR, {
      class: 'innerEdge',
    });
    this.drawCentralNode();
    this.drawInnerNodes();
    this.drawOuterNodes();
    this.graph
      .getEdges()
      .forEach((edge) => this.drawEdge(edge, { class: 'link' }));
  }

  private drawLine(
    start: Position,
    end: Position,
    options?: {
      class?: string;
      curveType?: CurveType;
    }
  ): PathContext {
    const line = this.SVGContext.append('path')
      .style('fill', 'none')
      .attr('d', Curve.generate(options?.curveType ?? 'linear')(start, end));

    if (options?.class) {
      line.attr('class', options.class);
    }

    return line;
  }

  private drawCirclePoint(position: Position, size = this.nodeBaseSize) {
    return this.SVGContext.append('circle')
      .attr('cx', position.x)
      .attr('cy', position.y)
      .attr('r', size);
  }

  private findNodeById(id: number): LayoutContext {
    return this.SVGContext.select(`[id=\"${id}\"]`);
  }

  private getNodePosition(id: number): Position {
    const node = this.findNodeById(id);
    return {
      x: parseFloat(node.attr('cx')),
      y: parseFloat(node.attr('cy')),
    };
  }

  private drawEdge(edge: Edge, options?: { class?: string }): PathContext {
    return this.drawLine(
      this.getNodePosition(edge.getSource().getId()),
      this.getNodePosition(edge.getTarget().getId()),
      {
        class: options?.class,
        curveType: 'smooth',
      }
    )
      .attr('source-id', edge.getSource().getId())
      .attr('target-id', edge.getTarget().getId())
      .lower();
  }

  private drawNode(
    node: Node,
    position: Position,
    options?: { class?: string; size?: number }
  ) {
    const drawnNode = this.drawCirclePoint(position, options?.size).attr(
      'id',
      node.getId()
    );
    if (options?.class) {
      drawnNode.attr('class', options.class);
    }
  }

  private drawCircumference(
    numberOfPoints: number,
    radiusScaleFactor: number,
    options?: { class?: string }
  ) {
    const points = Circle.calculateCirclePoints(
      numberOfPoints,
      this.radius * radiusScaleFactor,
      this.center
    );
    points.forEach((point, index) => {
      this.drawLine(point, points[(index + 1) % points.length], {
        class: options?.class,
      });
    });
  }

  private drawCentralNode() {
    const centralNode = this.graph.getNodesByHierarchyLevel(
      HierarchyLevels.central
    )[0];
    if (centralNode) {
      this.drawNode(centralNode, this.center, {
        size: this.nodeBaseSize * 6,
        class: 'centralNode',
      });

      const labelSize = '2.5vmin';
      const labelPosition = Circle.translatePosition(
        this.center,
        this.center,
        -(CENTRAL_LABEL_MAX_WIDTH / 2)
      );
      this.drawLabel({
        text: centralNode.getName(),
        size: labelSize,
        position: labelPosition,
        isBold: true,
        width: CENTRAL_LABEL_MAX_WIDTH,
        align: 'center',
      });
    }
  }

  private drawInnerNodes() {
    const innerNodes = this.graph.getNodesByHierarchyLevel(
      HierarchyLevels.inner
    );
    const innerRadius = this.radius * INNER_NODES_RADIUS_SCALE_FACTOR;
    innerNodes.forEach((node, index) => {
      const nodePosition = Circle.calculateNodePosition({
        index,
        totalNodes: innerNodes.length,
        radius: innerRadius,
        center: this.center,
      });
      this.drawNode(node, nodePosition, { class: 'innerNode' });

      const labelSize = '1.3vmin';

      const isNodeInLeftHalf = [Quarter.TopLeft, Quarter.BottomLeft].includes(
        Circle.getQuarterFromPoint(this.center, nodePosition)
      );

      const labelTranslation = isNodeInLeftHalf
        ? innerRadius + this.nodeBaseSize + LABEL_MARGIN
        : innerRadius + this.nodeBaseSize + LABEL_MARGIN;

      const labelPosition = Circle.translatePosition(
        nodePosition,
        this.center,
        labelTranslation
      );

      if (isNodeInLeftHalf) {
        labelPosition.x -= INNER_LABEL_MAX_WIDTH;
      }

      this.drawLabel(
        {
          text: node.getName(),
          position: labelPosition,
          size: labelSize,
          align: isNodeInLeftHalf ? 'right' : 'left',
          width: INNER_LABEL_MAX_WIDTH,
        },
        undefined,
        false
      );
    });
  }

  private drawOuterNodes() {
    const outerNodes = this.graph.getNodesByHierarchyLevel(
      HierarchyLevels.outer
    );
    const outerRadius = this.radius * OUTER_NODES_RADIUS_SCALE_FACTOR;
    const nodeSize = this.nodeBaseSize / 2;

    outerNodes.forEach((node, index) => {
      const nodePosition = Circle.calculateNodePosition({
        index,
        totalNodes: outerNodes.length,
        radius: outerRadius,
        center: this.center,
      });
      this.drawNode(node, nodePosition, { class: 'outerNode', size: nodeSize });

      const labelSize = '0.9vmin';
      const isNodeInLeftHalf = [Quarter.TopLeft, Quarter.BottomLeft].includes(
        Circle.getQuarterFromPoint(this.center, nodePosition)
      );
      const labelTranslation = isNodeInLeftHalf
        ? outerRadius + OUTER_LABEL_MAX_WIDTH + nodeSize + LABEL_MARGIN
        : outerRadius + nodeSize + LABEL_MARGIN;
      const degreeAdjustment = (1.5 * Math.PI) / 180;
      this.drawLabel(
        {
          text: node.getName(),
          position: Circle.translatePosition(
            nodePosition,
            this.center,
            labelTranslation,
            isNodeInLeftHalf ? degreeAdjustment : -degreeAdjustment
          ),
          width: OUTER_LABEL_MAX_WIDTH,
          size: labelSize,
          isBold: true,
          align: isNodeInLeftHalf ? 'right' : 'left',
        },
        undefined,
        true
      );
    });
  }

  private getLabelRotation(labelPosition: Position): number {
    const angle = Circle.getAngleBetweenPositions(this.center, labelPosition);
    if (angle > 90 && angle <= 180) return angle + 180;
    if (angle < -90 && angle >= -180) return angle - 180;
    return angle;
  }

  public drawLabel(
    label: { text: string; size: string; width: number } & Partial<Label>,
    node?: Node,
    calculateRotation?: boolean
  ): void {
    const context = this.SVGContext;
    if (node) {
      label.position = this.getNodePosition(node.getId());
    }

    if (!label.position)
      throw new Error('Label needs a position or a reference node to be drawn');

    if (calculateRotation) {
      label.rotation = this.getLabelRotation(label.position);
    }
    const transform = label.rotation
      ? `rotate(${label.rotation}) translate(${label.position.x}, ${label.position.y}) `
      : `translate(${label.position.x}, ${label.position.y})`;

    const capitalizeFirst = (string: string) => {
      return (
        string[0].toUpperCase() + string.slice(1, string.length).toLowerCase()
      );
    };

    const drawnLabel = context
      .append('g')
      .attr('transform', transform)
      .attr('transform-origin', `${label.position.x} ${label.position.y}`)
      .append('foreignObject')
      .attr('width', label.width)
      .attr('height', LABEL_MAX_HEIGHT)
      .append('xhtml:div')
      .style('font-size', label.size)
      .style('text-align', label.align ?? 'left')
      .attr('class', 'label-container')
      .append('text')
      .text(capitalizeFirst(label.text));

    if (label.isBold) {
      drawnLabel.attr('font-weight', 'bold');
    }

    drawnLabel.raise();
  }

  public setWidth(width: number): Layout {
    this.width = width;
    this.height = width;
    this.radius = width / RADIUS_FACTOR;
    this.center = { x: width / 2, y: width / 2 };
    return this;
  }
}
