import { Circle } from "./circle";
import { Curve, CurveType } from "./curve";
import { Edge } from "./edge";
import { Graph, HierarchyLevels } from "./graph";
import { Node } from "./node";

const DEFAULT_LAYOUT_WIDTH = 1200;
const RADIUS_FACTOR = 4;
const NODE_SIZE_FACTOR = 53;
const OUTER_NODES_RADIUS_SCALE_FACTOR = 1.4;
const INNER_NODES_RADIUS_SCALE_FACTOR = 0.65;

export type Position = { x: number, y: number };

export type Label = {
    text: string;
    position: Position;
    size: string;
    rotation: number;
}
export type LayoutContext = d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
export type PathContext = d3.Selection<SVGPathElement, unknown, HTMLElement, any>;

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
            width?: number,
            radius?: number,
            nodeBaseSize?: number
        }
    ) {
        this.graph = graph;
        this.SVGContext = SVGContext;
        this.width = options?.width ?? DEFAULT_LAYOUT_WIDTH;
        this.height = options?.width ?? DEFAULT_LAYOUT_WIDTH;
        this.radius = options?.radius ?? DEFAULT_LAYOUT_WIDTH / RADIUS_FACTOR;
        this.center = options?.width ?
            Circle.calculateCenter(options.width) :
            Circle.calculateCenter(DEFAULT_LAYOUT_WIDTH);
        this.nodeBaseSize = options?.nodeBaseSize ?? this.width / NODE_SIZE_FACTOR;
    }

    public draw() {
        this.drawCircumference(300, OUTER_NODES_RADIUS_SCALE_FACTOR, { class: 'outerEdge' });
        this.drawCircumference(10, INNER_NODES_RADIUS_SCALE_FACTOR, { class: 'innerEdge' });
        this.drawNodesInCircularShape();
        this.graph.getEdges().forEach(edge => this.drawEdge(edge, { class: 'link' }));
        this.bringNodesToFront();
    }

    private bringNodesToFront() {
        this.graph
            .getNodes()
            .map(node => node.getId())
            .map(this.findNodeById.bind(this))
            .forEach(nodeElement => nodeElement.raise());
    }

    private drawLine(start: Position, end: Position, options?: {
        class?: string,
        curveType?: CurveType
    }): PathContext {

        const line = this.SVGContext.append("path")
            .style("fill", "none")
            .attr("d", Curve.generate(options?.curveType ?? 'linear')(start, end));

        if (options?.class) {
            line.attr("class", options.class);
        }

        return line;
    }

    private drawCirclePoint(position: Position, size = this.nodeBaseSize) {
        return this.SVGContext
            .append("circle")
            .attr("cx", position.x)
            .attr("cy", position.y)
            .attr("r", size);
    }

    private findNodeById(id: number): LayoutContext {
        return this.SVGContext.select(`[id=\"${id}\"]`);
    }

    private getNodePosition(id: number): Position {
        const node = this.findNodeById(id);
        return {
            x: parseFloat(node.attr("cx")),
            y: parseFloat(node.attr("cy"))
        }
    }

    private drawEdge(edge: Edge, options?: { class?: string }): PathContext {
        return this.drawLine(
            this.getNodePosition(edge.getSource().getId()),
            this.getNodePosition(edge.getTarget().getId()),
            {
                class: options?.class
            }
        )
            .attr("source-id", edge.getSource().getId())
            .attr("target-id", edge.getTarget().getId());
    }

    private drawNode(node: Node, position: Position, options?: { class?: string, size?: number }) {
        const drawnNode = this.drawCirclePoint(position, options?.size).attr("id", node.getId());
        if (options?.class) {
            drawnNode.attr("class", options.class);
        }
    }

    private drawCircumference(numberOfPoints: number, radiusScaleFactor: number, options?: { class?: string }) {
        const points = Circle.calculateCirclePoints(numberOfPoints, this.radius * radiusScaleFactor, this.width);
        points.forEach(
            (point, index) => {
                this.drawLine(point, points[(index + 1) % points.length], { class: options?.class })
            }
        )
    }

    private drawNodesInCircularShape() {
        const centralNode = this.graph.getNodesByHierarchyLevel(HierarchyLevels.central)[0];
        const innerNodes = this.graph.getNodesByHierarchyLevel(HierarchyLevels.inner);
        const outerNodes = this.graph.getNodesByHierarchyLevel(HierarchyLevels.outer);

        if (centralNode) {
            this.drawNode(
                centralNode,
                this.center,
                {
                    size: this.nodeBaseSize * 7,
                    class: 'centralNode'
                }
            )
        }

        innerNodes.forEach((node, index) => {
            this.drawNode(
                node,
                Circle.calculateNodePosition({
                    index,
                    totalNodes: innerNodes.length,
                    radius: this.radius * INNER_NODES_RADIUS_SCALE_FACTOR,
                    width: this.width
                }),
                {
                    class: 'innerNode'
                }
            );
            this.drawLabel({text: node.getName(), size: '1.8vmin'}, node);
        });

        outerNodes.forEach((node, index) => {
            this.drawNode(
                node,
                Circle.calculateNodePosition({
                    index,
                    totalNodes: outerNodes.length,
                    radius: this.radius * OUTER_NODES_RADIUS_SCALE_FACTOR,
                    width: this.width
                }),
                {
                    class: 'outerNode',
                    size: this.nodeBaseSize / 2
                }
            );
            this.drawLabel({text: node.getName(), size: '1vmin'}, node, true);
        });
    }


    public drawLabel(label: { text: string } & Partial<Label>, node?: Node, calculateRotation?: boolean): void {
        const context = this.SVGContext;
        if (node) {
            label.position = this.getNodePosition(node.getId());
        }

        if (!label.position) throw new Error("Label needs a position or a reference node to be drawn");

        if (calculateRotation) {
            label.rotation = Circle.getAngleBetweenPositions(this.center, label.position);
        }

        const drawnLabel = context.append("text")
            .attr("dx", label.position.x)
            .attr("dy", label.position.y)
            .text(label.text);

        if (label.size) {
            drawnLabel.attr("font-size", label.size);
        }

        if (label.rotation) {
            drawnLabel
                .attr("transform", `rotate(${label.rotation})`)
                .attr("transform-origin", `${label.position.x} ${label.position.y}`);
        }
    }

    public setWidth(width: number): Layout {
        this.width = width;
        this.height = width;
        this.radius = width / RADIUS_FACTOR;
        this.center = { x: width / 2, y: width / 2 };
        return this;
    }
}