import * as d3 from 'd3';
import { Position } from './layout';

export type CurveType = 'smooth' | 'linear';

type CurveFunction = (source: Position, target: Position) => string | null;

export class Curve {
  constructor() {}

  static generate(curveType: CurveType): CurveFunction {
    switch (curveType) {
      case 'linear':
        return this.linearCurve;
      case 'smooth':
        return this.smoothCurve;
    }
  }

  private static linearCurve(source: Position, target: Position): string {
    const dx = target.x - source.x;
    const dy = target.y - source.y;
    const dr = Math.sqrt(dx * dx + dy * dy) * 2; // Control the curvature
    return `M${source.x},${source.y}A${dr},${dr} 0 0,1 ${target.x},${target.y}`;
  }

  private static smoothCurve(
    source: Position,
    target: Position
  ): string | null {
    const smoothLine = d3
      .line<Position>()
      .x((position) => position.x)
      .y((position) => position.y)
      .curve(d3.curveBasis);

    const offset = 30;

    const middlePoint = {
      x: (source.x + target.x) / 2,
      y: (source.y + target.y) / 2,
    };
    const firstQuarterPoint = {
      x: (source.x + middlePoint.x) / 2 - offset,
      y: (source.y + middlePoint.y) / 2 - offset,
    };
    const secondQuarterPoint = {
      x: (middlePoint.x + target.x) / 2 + offset,
      y: (middlePoint.y + target.y) / 2 + offset,
    };
    return smoothLine([source, firstQuarterPoint, secondQuarterPoint, target]);
  }
}
