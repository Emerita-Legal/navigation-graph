import { Curve, CurveType } from "./curve";
import { Node } from "./node";


export class Edge {
    private readonly id: [number, number];
    private source: Node;
    private target: Node;
    private curveType: CurveType;
    private class: string;

    constructor(
        source: Node,
        target: Node,
        options?: {
            curveType?: CurveType,
            class?: string
        }) {
        this.source = source;
        this.target = target;
        this.class = options?.class ?? '';
        this.curveType = options?.curveType ?? 'linear';
        this.id = [source.getId(), target.getId()]
    }

    public draw(SVGContext: d3.Selection<d3.BaseType, unknown, HTMLElement, any>): void {
        const edge = SVGContext.append("path")
            .style("fill", "none")
            .attr("d", Curve.generate(this.curveType)(this.source.getPosition(), this.target.getPosition()))
            .attr("id", this.source.getId())

        if (this.class) {
            edge.attr("class", this.class);
        }

    }

    public getClass() {
        return this.class;
    }

    public setClass(classString: string) {
        this.class = classString;
        return this;
    }

    public getId(): [number, number] {
        return this.id;
    }
}