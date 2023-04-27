import { Node, Position } from "./node";

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 800;
const DEFAULT_RADIUS = 100;
const DEFAULT_SIZE = 22;

export class Graph {
    private centralNode: Node;
    private innerNodes: Node[];
    private outerNodes: Node[];
    private width: number;
    private height: number;
    private radius: number;

    constructor(
        centralNode: Node,
        innerNodes: Node[],
        outerNodes: Node[],
        options?: {
            width?: number;
            height?: number;
            radius?: number;
        }) {
        this.centralNode = centralNode;
        this.innerNodes = innerNodes;
        this.outerNodes = outerNodes;
        this.width = options?.width ?? DEFAULT_WIDTH;
        this.height = options?.height ?? DEFAULT_HEIGHT;
        this.radius = options?.radius ?? DEFAULT_RADIUS;
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

    private updateGraphLayout() {
        this.centralNode
            .setSize(DEFAULT_SIZE * 3)
            .setPosition(
                { x: this.width / 2, y: this.height / 2 }
            );
        this.innerNodes.forEach((node, index) => {
            node.setClass('innerNode')
                .setSize(DEFAULT_SIZE)
                .setPosition(
                    this.calculateNodePosition(index, this.innerNodes.length, 1)
                );
        });
        this.outerNodes.forEach((node, index) => {
            node.setClass('outerNode')
                .setSize(DEFAULT_SIZE / 2)
                .setPosition(
                    this.calculateNodePosition(index, this.outerNodes.length, 2)
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