import { Position } from "./node";

export class Circle {

    static calculateCenter(width: number): Position {
        return { x: width / 2, y: width / 2 }
    }

    static calculateNodePosition({ index, totalNodes, radius, width }: {
        index: number,
        totalNodes: number,
        radius: number,
        width: number
    }): Position {
        const angle = (2 * Math.PI) / totalNodes;
        return {
            x: (radius) * Math.cos(index * angle) + width / 2,
            y: (radius) * Math.sin(index * angle) + width / 2
        }
    }

    static calculateCirclePoints(numberOfPoints: number, radius: number, width: number): Position[] {
        return Array(numberOfPoints)
            .fill(null)
            .map((_, index) => Circle.calculateNodePosition({index, totalNodes: numberOfPoints, radius, width}));
    }
}