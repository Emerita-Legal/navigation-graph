import { EventEmitter } from '@angular/core';
import { Circle, Quarter } from './circle';
import { Curve, CurveType } from './curve';
import { Edge } from './edge';
import { Graph, HierarchyLevels } from './graph';
import { Node } from './node';
import { Dimensions } from './dimensions';
import { Label } from './label';

export type Position = { x: number; y: number };

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
  private graph: Graph;
  private SVGContext: LayoutContext;
  private dimensions: Dimensions;
  onCircleClickEmitter = new EventEmitter<any>();

  constructor(
    graph: Graph,
    SVGContext: LayoutContext,
    width: number,
    height: number
  ) {
    this.graph = graph;
    this.SVGContext = SVGContext;
    this.dimensions = new Dimensions(height, width);
  }

  public draw() {
    this.createOpacityFilter();
    this.drawCentralImage();
    this.drawCircumference(300, this.dimensions.getOuterNodesRadius(), {
      class: 'outerEdge',
    });
    this.drawCircumference(10, this.dimensions.getInnerNodesRadius(), {
      class: 'innerEdge',
    });
    this.drawCentralNode();
    this.drawInnerNodes();
    this.drawOuterNodes();
    this.graph
      .getEdges()
      .forEach((edge) => this.drawEdge(edge, { class: 'link' }));
  }

  private createOpacityFilter() {
    const opacity = 0.8;
    this.SVGContext.append('defs')
      .append('filter')
      .attr('id', 'darken-filter')
      .append('feColorMatrix')
      .attr('type', 'matrix')
      .attr(
        'values',
        `${1 - opacity} 0 0 0 0 
        0 ${1 - opacity} 0 0 0 
        0 0 ${1 - opacity} 0 0 
        0 0 0 1 0`
      )
      .attr('result', 'colored');
  }

  private drawCentralImage() {
    /** In order to use a background image later, we have to define it beforehand  */
    this.SVGContext.select('defs')
      .append('pattern')
      .attr('id', 'central-image')
      .attr('width', 1)
      .attr('height', 1)
      .append('image')
      .attr(
        'xlink:href',
        'https://imageproxy-prod.ent.sdy.ai/v1/image/1500x/https://fws.weforum.org/images/topics/a1Gb0000000pTDZEA2/standard'
      )
      .attr('width', this.dimensions.getCentralNodeSize() * 4)
      .attr('height', this.dimensions.getCentralNodeSize() * 4)
      .attr('x', -this.dimensions.getCentralNodeSize())
      .attr('y', -this.dimensions.getCentralNodeSize())
      .style('filter', 'url(#darken-filter)');
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
      .attr('d', Curve.generate(options?.curveType)(start, end));

    if (options?.class) {
      line.attr('class', options.class);
    }

    return line;
  }

  private drawCircumference(
    numberOfPoints: number,
    radius: number,
    options?: { class?: string }
  ) {
    const points = Circle.calculateCirclePoints(
      numberOfPoints,
      radius,
      this.dimensions.getCenter()
    );
    points.forEach((point, index) => {
      this.drawLine(point, points[(index + 1) % points.length], {
        class: options?.class,
      });
    });
  }

  private drawCirclePoint(
    position: Position,
    node: Node,
    size = this.dimensions.getNodeBaseSize()
  ) {
    return this.SVGContext.append('circle')
      .attr('cx', position.x)
      .attr('cy', position.y)
      .attr('r', size)
      .on('click', (event) => {
        this.onCircleClickEmitter.emit({ ...event, id: node.getId() });
      });
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
    const drawnNode = this.drawCirclePoint(position, node, options?.size).attr(
      'id',
      node.getId()
    );
    if (options?.class) {
      drawnNode.attr('class', options.class);
    }
    return drawnNode;
  }

  private drawCentralNode() {
    const centralNode = this.graph.getNodesByHierarchyLevel(
      HierarchyLevels.central
    )[0];
    if (centralNode) {
      const drawnNode = this.drawNode(
        centralNode,
        this.dimensions.getCenter(),
        {
          size: this.dimensions.getCentralNodeSize(),
          class: 'centralNode',
        }
      );

      drawnNode.style('fill', 'url(#central-image)');

      const labelPosition = this.dimensions.getCenter();
      labelPosition.x -= this.dimensions.getCentralLabelSize();
      labelPosition.y -= this.dimensions.getCentralNodeSize();

      new Label(centralNode.getName(), {
        position: labelPosition,
        width: 2 * this.dimensions.getCentralLabelSize(),
        height: 2 * this.dimensions.getCentralNodeSize(),
        styles: [
          { attr: 'color', value: 'white' },
          {
            attr: 'font-size',
            value: '2.5vmin',
          },
          {
            attr: 'text-align',
            value: 'center',
          },
          {
            attr: 'position',
            value: 'relative',
          },
          {
            attr: 'top',
            value: '40%',
          },
        ],
      }).draw(this.SVGContext);
    }
  }

  private drawInnerNodes() {
    const innerNodes = this.graph.getNodesByHierarchyLevel(
      HierarchyLevels.inner
    );
    innerNodes.forEach((node, index) => {
      const nodePosition = Circle.calculateNodePosition({
        index,
        totalNodes: innerNodes.length,
        radius: this.dimensions.getInnerNodesRadius(),
        center: this.dimensions.getCenter(),
      });
      this.drawNode(node, nodePosition, {
        class: 'innerNode',
        size: this.dimensions.getInnerNodeSize(),
      });

      const isNodeInLeftHalf = [Quarter.TopLeft, Quarter.BottomLeft].includes(
        Circle.getQuarterFromPoint(this.dimensions.getCenter(), nodePosition)
      );

      const translation =
        this.dimensions.getInnerNodesRadius() +
        this.dimensions.getNodeBaseSize() +
        this.dimensions.getInnerlabelMargin();

      const labelPosition = Circle.translatePosition(
        nodePosition,
        this.dimensions.getCenter(),
        translation
      );

      if (isNodeInLeftHalf) {
        labelPosition.x -= this.dimensions.getInnerLabelSize();
      }

      new Label(node.getName(), {
        position: labelPosition,
        width: this.dimensions.getInnerLabelSize(),
        height: 2 * this.dimensions.getInnerNodeSize(),
        styles: [
          {
            attr: 'font-size',
            value: '1.3vmin',
          },
          {
            attr: 'text-align',
            value: isNodeInLeftHalf ? 'right' : 'left',
          },
        ],
      }).draw(this.SVGContext);
    });
  }

  private drawOuterNodes() {
    const outerNodes = this.graph.getNodesByHierarchyLevel(
      HierarchyLevels.outer
    );

    outerNodes.forEach((node, index) => {
      const nodePosition = Circle.calculateNodePosition({
        index,
        totalNodes: outerNodes.length,
        radius: this.dimensions.getOuterNodesRadius(),
        center: this.dimensions.getCenter(),
      });

      this.drawNode(node, nodePosition, {
        class: 'outerNode',
        size: this.dimensions.getOuterNodeSize(),
      });

      const isNodeInLeftHalf = [Quarter.TopLeft, Quarter.BottomLeft].includes(
        Circle.getQuarterFromPoint(this.dimensions.getCenter(), nodePosition)
      );

      const labelTranslation = isNodeInLeftHalf
        ? this.dimensions.getOuterNodesRadius() +
          this.dimensions.getOuterLabelSize() +
          this.dimensions.getOuterNodeSize() +
          this.dimensions.getOuterLabelMargin()
        : this.dimensions.getOuterNodesRadius() +
          this.dimensions.getOuterNodeSize() +
          this.dimensions.getOuterLabelMargin();

      const degreeAdjustment = (1.5 * Math.PI) / 180;

      const labelPosition = Circle.translatePosition(
        nodePosition,
        this.dimensions.getCenter(),
        labelTranslation,
        isNodeInLeftHalf ? degreeAdjustment : -degreeAdjustment
      );

      new Label(node.getName(), {
        position: labelPosition,
        width: this.dimensions.getOuterLabelSize(),
        height: 2 * this.dimensions.getInnerNodeSize(),
        styles: [
          {
            attr: 'font-weight',
            value: 'bold',
          },
          {
            attr: 'font-size',
            value: '1vmin',
          },
          {
            attr: 'text-align',
            value: isNodeInLeftHalf ? 'right' : 'left',
          },
        ],
        rotation: Label.calculateRotation(
          labelPosition,
          this.dimensions.getCenter()
        ),
      }).draw(this.SVGContext);
    });
  }
}
