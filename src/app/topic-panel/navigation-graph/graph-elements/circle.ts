import { Position } from "./node";

const DEFAULT_LAYOUT_WIDTH = 1200;
const RADIUS_FACTOR = 4;


export class Circle {
    static width = DEFAULT_LAYOUT_WIDTH;
    static height = DEFAULT_LAYOUT_WIDTH;
    static radius = DEFAULT_LAYOUT_WIDTH / RADIUS_FACTOR;
    static center: Position = { x: DEFAULT_LAYOUT_WIDTH / 2, y: DEFAULT_LAYOUT_WIDTH / 2 };

    static calculateNodePosition(index: number, totalNodes: number, radiusScaleFactor: number): Position {
        const angle = (2 * Math.PI) / totalNodes;
        return {
            x: (Circle.radius * radiusScaleFactor) * Math.cos(index * angle) + Circle.width / 2,
            y: (Circle.radius * radiusScaleFactor) * Math.sin(index * angle) + Circle.height / 2
        }
    }

    static calculateCirclePoints(numberOfPoints: number, radiusScaleFactor: number): Position[] {
        return Array(numberOfPoints)
        .fill(null)
        .map((_, index) => this.calculateNodePosition(index, numberOfPoints, radiusScaleFactor));
    }

    static setWidth(width: number) {
        Circle.width = width;
        Circle.height = width;
        Circle.radius = width / RADIUS_FACTOR;
        Circle.center = { x: width / 2, y: width / 2 };
    }
}