import { Position } from "./layout";

export enum Quarter {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight
}
export class Circle {

    
    static calculateCenter(width: number): Position {
        return { x: width / 2, y: width / 2 }
    }

    static calculateNodePosition({ index, totalNodes, radius, center }: {
        index: number,
        totalNodes: number,
        radius: number,
        center: Position
    }): Position {
        const angle = (2 * Math.PI) / totalNodes;
        return {
            x: (radius) * Math.cos(index * angle) + center.x,
            y: (radius) * Math.sin(index * angle) + center.y
        }
    }

    static translatePosition(position: Position, center: Position, newRadius: number): Position {
        const angle = Math.atan2(position.y - center.y, position.x - center.x);
        return {
            x: newRadius * Math.cos(angle) + center.x,
            y: newRadius * Math.sin(angle) + center.y
        }
    }

    static calculateCirclePoints(numberOfPoints: number, radius: number, center: Position): Position[] {
        return Array(numberOfPoints)
            .fill(null)
            .map((_, index) => Circle.calculateNodePosition({ index, totalNodes: numberOfPoints, radius, center }));
    }

    static getQuarterFromPoint(center: Position, point: Position): Quarter {
        const angle = this.getAngleBetweenPositions(center, point);
        if (angle > 90 && angle <= 180) return Quarter.TopRight;
        if (angle < -90 && angle >= -180) return Quarter.BottomRight;
        if (angle > 0 && angle <= 90) return Quarter.TopLeft;
        return Quarter.BottomLeft;
    }

    static getAngleBetweenPositions(position1: Position, position2: Position) {
        const dx = position1.x - position2.x;
        const dy = position1.y - position2.y;
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);
        return angle;
    }
}