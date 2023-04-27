import * as d3 from 'd3';

export type CurveType = 'smooth' | 'linear';

export class Curve {

    constructor() { }

    static generate(curveType: CurveType):
        (source: { x: number, y: number }, target: { x: number, y: number }) => string | null {
        switch (curveType) {
            case 'linear':
                return this.linearCurve;
            case 'smooth':
                return this.smoothCurve;
        }
    }

    private static linearCurve(
        source: { x: number, y: number }, target: { x: number, y: number }
    ): string {
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const dr = Math.sqrt(dx * dx + dy * dy) * 2; // Control the curvature
        return `M${source.x},${source.y}A${dr},${dr} 0 0,1 ${target.x},${target.y}`;
    };

    private static smoothCurve(
        source: { x: number, y: number }, target: { x: number, y: number }
    ): string | null {
        const smoothLine = d3.line<{ x: number, y: number }>()
            .x((d) => d.x)
            .y((d) => d.y)
            .curve(d3.curveBasis);

        const offset = 25;

        const middlePoint = {
            x: (source.x + target.x) / 2,
            y: (source.y + target.y) / 2
        }
        const firstQuarterPoint = {
            x: (source.x + middlePoint.x) / 2 - offset,
            y: (source.y + middlePoint.y) / 2
        }
        const secondQuarterPoint = {
            x: (middlePoint.x + target.x) / 2 + offset,
            y: (middlePoint.y + target.y) / 2
        }
        return smoothLine([source, firstQuarterPoint, secondQuarterPoint, target]);
    };
}