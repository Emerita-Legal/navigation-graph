import { type Edge } from "./edge";
import { HierarchyLevels } from "./graph";

const DEFAULT_SIZE = 22;

export type Position = { x: number, y: number };

export type Label = {
    text: string;
    position: Position;
    size: string;
    rotation: number;
}

export class Node {
    private readonly id: number;
    private hierarchyLevel: HierarchyLevels;

    constructor(
        id: number,
        hierarchyLevel: HierarchyLevels
    ) {
        this.id = id;
        this.hierarchyLevel = hierarchyLevel;
    }

    public getId(): number {
        return this.id;
    }

    public getHierarchyLevel(): HierarchyLevels {
        return this.hierarchyLevel;
    }

    // public addLabel(label: { text: string } & Partial<Label>, calculateRotation?: boolean) {
    //     this.label = {
    //         text: label.text,
    //         position: label.position ?? this.position,
    //         rotation: label.rotation ?? 0,
    //         size: label.size ?? '10px',
    //     }

    //     if (calculateRotation) {
    //         this.label.rotation = this.getLabelAngle({ x: 550, y: 550 }, this.label.position);
    //     }

    //     return this;
    // }

    // private getLabelAngle(center: Position, labelPosition: Position) {
    //     const dx = labelPosition.x - center.x;
    //     const dy = labelPosition.y - center.y;
    //     let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    //     if (angle < 0) {
    //         angle += 360;
    //     }
    //     return angle;
    // }

}