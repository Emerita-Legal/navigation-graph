import { Node, Position } from "./node";

const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 1200;
const RADIUS_FACTOR = 4;
const NODE_SIZE_FACTOR = 53;
const OUTER_NODES_RADIUS_SCALE_FACTOR = 1.6;
const INNER_NODES_RADIUS_SCALE_FACTOR = 0.75;

export class Graph {
    private centralNode: Node;
    private innerNodes: Node[];
    private outerNodes: Node[];
    private width: number;
    private height: number;
    private nodeBaseSize: number;
    private radius: number;

    constructor(
        centralNode: Node,
        innerNodes: Node[],
        outerNodes: Node[],
        options?: {
            width?: number;
            height?: number;
            radius?: number;
            nodeBaseSize?: number;
        }) {
        this.centralNode = centralNode;
        this.innerNodes = innerNodes;
        this.outerNodes = outerNodes;
        this.width = options?.width ?? DEFAULT_WIDTH;
        this.height = options?.height ?? DEFAULT_HEIGHT;
        this.radius = options?.radius ?? DEFAULT_WIDTH / RADIUS_FACTOR;
        this.nodeBaseSize = options?.nodeBaseSize ?? DEFAULT_WIDTH / NODE_SIZE_FACTOR;
    }

    public draw(SVGContext: d3.Selection<d3.BaseType, unknown, HTMLElement, any>) {
        this.updateGraphLayout();
        /** Draw all the edges before the nodes so the nodes stay always ahead on the layout */
        [...this.innerNodes, ...this.outerNodes].forEach(node => {
            node.getEdges().forEach(edge => edge.draw(SVGContext));
        });
        [...this.innerNodes, ...this.outerNodes].forEach(node => {
            node.draw(SVGContext)
        });
        this.centralNode.draw(SVGContext);
    }

    public setWidth(width: number): Graph {
        this.width = width;
        this.height = width;
        this.nodeBaseSize = width / NODE_SIZE_FACTOR;
        this.radius = width / RADIUS_FACTOR;
        return this;
    }

    private updateGraphLayout() {
        this.centralNode
            .setSize(this.nodeBaseSize * 8)
            .setPosition(
                { x: this.width / 2, y: this.height / 2 }
            );
        this.innerNodes.forEach((node, index) => {
            node.setClass('innerNode')
                .setSize(this.nodeBaseSize)
                .setPosition(
                    this.calculateNodePosition(
                        index,
                        this.innerNodes.length,
                        INNER_NODES_RADIUS_SCALE_FACTOR
                    )
                );
        });
        this.outerNodes.forEach((node, index) => {
            node.setClass('outerNode')
                .setSize(this.nodeBaseSize / 2)
                .setPosition(
                    this.calculateNodePosition(
                        index,
                        this.outerNodes.length,
                        OUTER_NODES_RADIUS_SCALE_FACTOR
                    )
                );
        });
    }

    private calculateNodePosition(index: number, totalNodes: number, radiusScale: number): Position {
        const angle = (2 * Math.PI) / totalNodes;
        return {
            x: (this.radius * radiusScale) * Math.cos(index * angle) + this.width / 2,
            y: (this.radius * radiusScale) * Math.sin(index * angle) + this.height / 2
        }
    }
}