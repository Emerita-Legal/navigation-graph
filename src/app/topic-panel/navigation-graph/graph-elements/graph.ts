import { Edge } from "./edge";
import { Node } from "./node";

export enum HierarchyLevels {
    'central' = 0,
    'inner' = 1,
    'outer' = 2
}

export class Graph {
    private nodes: Node[];
    private edges: Edge[];

    constructor(
        nodes: Node[],
        edges: Edge[]
    ) {
        this.nodes = nodes;
        this.edges = edges;
    }

    public getNodes() {
        return this.nodes;
    }

    public getEdges() {
        return this.edges;
    }

    public addNode(name: string, hierarchyLevel: HierarchyLevels) {
        const node = new Node(this.getNextId(), name, hierarchyLevel);
        this.nodes.push(node);
        return node;
    }

    public createAndAddEdge(source: Node, target: Node){
        return this.addEdge(new Edge(source, target));
    }

    public addEdge(edge: Edge): Edge {
        if (!this.hasEdge(edge)) {
            this.edges.push(edge);
        }
        return edge;
    }

    public getNodesByHierarchyLevel(hierarchyLevel: HierarchyLevels){
        return this.nodes.filter(node => node.getHierarchyLevel() === hierarchyLevel);
    }

    private hasEdge(edge: Edge): boolean {
        return this.edges.filter(e => {
            return e.getId() === edge.getId();
        }).length > 0;
    }

    private getNextId() {
        return this.nodes.length + 1;
    }
}