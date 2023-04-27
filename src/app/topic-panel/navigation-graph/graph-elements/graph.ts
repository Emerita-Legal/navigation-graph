import { Circle } from "./circle";
import { Edge } from "./edge";
import { Node, Position } from "./node";

const NODE_SIZE_FACTOR = 53;
const OUTER_NODES_RADIUS_SCALE_FACTOR = 1.4;
const INNER_NODES_RADIUS_SCALE_FACTOR = 0.65;

export class Graph {
    private centralNode: Node;
    private innerNodes: Node[];
    private outerNodes: Node[];
    private nodeBaseSize: number;

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
        this.nodeBaseSize = options?.nodeBaseSize ?? Circle.width / NODE_SIZE_FACTOR;
    }

    public draw(SVGContext: d3.Selection<d3.BaseType, unknown, HTMLElement, any>) {
        const drawNodes = () => {
            [...this.innerNodes, ...this.outerNodes].forEach(node => {
                node.draw(SVGContext)
            });
        }
        
        const drawEdges = () => {
            [...this.innerNodes, ...this.outerNodes].forEach(node => {
                node.getEdges().forEach(edge => edge.draw(SVGContext));
            });
            const outerCirclePoints = Circle.calculateCirclePoints(300, OUTER_NODES_RADIUS_SCALE_FACTOR);
            outerCirclePoints.forEach(
                (point, index) => {
                    new Edge(
                        new Node(0, { position: point }),
                        new Node(0, { position: outerCirclePoints[(index + 1) % outerCirclePoints.length] }),
                        {
                            class: 'outerEdge'
                        }
                    ).draw(SVGContext)
                }
            )
            const innerCirclePoints = Circle.calculateCirclePoints(50, INNER_NODES_RADIUS_SCALE_FACTOR);
            innerCirclePoints.forEach(
                (point, index) => {
                    new Edge(
                        new Node(0, { position: point }),
                        new Node(0, { position: innerCirclePoints[(index + 1) % innerCirclePoints.length] }),
                        {
                            class: 'innerEdge'
                        }
                    ).draw(SVGContext)
                }
            )
        }

        this.prepareGraphLayout();
        /** Draw all the edges before the nodes so the nodes stay always ahead on the layout */
        drawEdges();
        drawNodes();

        this.centralNode.draw(SVGContext);
    }

    private prepareGraphLayout() {
        this.centralNode
            .setSize(this.nodeBaseSize * 7)
            .setPosition(Circle.center);
        this.innerNodes.forEach((node, index) => {
            node.setClass('innerNode')
                .setSize(this.nodeBaseSize)
                .setPosition(
                    Circle.calculateNodePosition(
                        index,
                        this.innerNodes.length,
                        INNER_NODES_RADIUS_SCALE_FACTOR
                    )
                ).addLabel({ text: 'Prueba', size: '1.8vmin' }, false);

        });
        this.outerNodes.forEach((node, index) => {
            node.setClass('outerNode')
                .setSize(this.nodeBaseSize / 2)
                .setPosition(
                    Circle.calculateNodePosition(
                        index,
                        this.outerNodes.length,
                        OUTER_NODES_RADIUS_SCALE_FACTOR
                    )
                ).addLabel({
                    text: 'Prueba',
                    size: '1vmin',
                    position:
                        Circle.calculateNodePosition(
                            index,
                            this.outerNodes.length,
                            1.5
                        )
                }, true);

        });
    }
}