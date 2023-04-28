import { HierarchyLevels } from "./graph";

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

}