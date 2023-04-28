import { Curve, CurveType } from "./curve";
import { Node } from "./node";


export class Edge {
    private readonly id: [number, number];
    private source: Node;
    private target: Node;

    constructor(
        source: Node,
        target: Node
    ) {
        this.source = source;
        this.target = target;
        this.id = [source.getId(), target.getId()]
    }

    public getId(): [number, number] {
        return this.id;
    }

    public getSource(): Node {
        return this.source;
    }

    public getTarget(): Node {
        return this.target;
    }
}