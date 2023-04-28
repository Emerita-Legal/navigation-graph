import { HierarchyLevels } from "./graph";

export class Node {
    private readonly id: number;
    private name: string;
    private hierarchyLevel: HierarchyLevels;

    constructor(
        id: number,
        name: string,
        hierarchyLevel: HierarchyLevels,
    ) {
        this.id = id;
        this.name = name;
        this.hierarchyLevel = hierarchyLevel;
    }

    public getId(): number {
        return this.id;
    }

    public getHierarchyLevel(): HierarchyLevels {
        return this.hierarchyLevel;
    }

    public getName(): string {
        return this.name;
    }

}