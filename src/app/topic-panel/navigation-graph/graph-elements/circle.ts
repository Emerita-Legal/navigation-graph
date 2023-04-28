import { Position } from "./layout";

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
            .map((_, index) => Circle.calculateNodePosition({ index, totalNodes: numberOfPoints, radius, width }));
    }

    static getAngleBetweenPositions(position1: Position, position2: Position) {
        const dx = position1.x - position2.x;
        const dy = position1.y - position2.y;
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);
        if (angle < 0) {
            angle += 360;
        }
        if (angle >= 360) {
            angle -= 360;
        }
        return angle;
    }
}