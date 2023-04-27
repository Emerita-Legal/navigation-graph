import { type Edge } from "./edge";

const DEFAULT_SIZE = 22;

export type Position = { x: number, y: number };

export class Node {
    private readonly id: number;
    private position: Position;
    private size: number;
    private edges: Edge[];
    private class: string;

    constructor(
        id: number,
        options?: {
            position?: Position;
            size?: number;
            edges?: Edge[];
            class?: string;
        }
    ) {
        this.id = id;
        this.position = options?.position ?? { x: 0, y: 0 };
        this.size = options?.size ?? DEFAULT_SIZE;
        this.edges = options?.edges ?? [];
        this.class = options?.class ?? '';
    }

    public draw(SVGContext: d3.Selection<d3.BaseType, unknown, HTMLElement, any>): void {
        /*
    
        this.SVG
        .append("text")
          .attr("dx", node.x + 200)
          .attr("dy", node.y - 620)
          .text("Prueba")
          .attr("font-family", "sans-serif")
          .attr("font-size", "10px")
          .attr("transform", "rotate()");
        */
        const drawedNode = SVGContext
            .append("circle")
            .attr("cx", this.position.x)
            .attr("cy", this.position.y)
            .attr("r", this.size)
            .attr("id", this.id);

        if (this.class !== undefined) {
            drawedNode.attr("class", this.class)
        }

    }

    public getId(): number {
        return this.id;
    }

    public getEdges(): Edge[] {
        return this.edges;
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(position: Position): Node {
        this.position = position;
        return this;
    }

    public getSize(): number {
        return this.size;
    }

    public setSize(size: number): Node {
        this.size = size;
        return this;
    }

    public getClass(): string {
        return this.class;
    }

    public setClass(classString: string): Node {
        this.class = classString;
        return this;
    }

    public addEdge(edge: Edge): Node {
        if (!this.hasEdge(edge)) {
            this.edges.push(edge);
        }
        return this;
    }

    private hasEdge(edge: Edge): boolean {
        return this.edges.filter(e => {
            return e.getId() === edge.getId()
        }).length > 0;
    }

}