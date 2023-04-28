import { Injectable } from '@angular/core';
import { Graph, HierarchyLevels } from '../topic-panel/navigation-graph/graph-elements/graph';

@Injectable()
export class GraphService {

    constructor() { }
    /* This should be the API connection */
    public getGraphInstance(): Graph {
        const graph = new Graph([], []);
        graph.addNode('CentralNode', HierarchyLevels.central);
        const innerNodes = Array(6).fill(null).map(_ => graph.addNode('InnerNode', HierarchyLevels.inner));
        const outerNodes = Array(40).fill(null).map(_ => graph.addNode('OuterNode', HierarchyLevels.outer));
        
        outerNodes.forEach((node, index) => graph.createAndAddEdge(node, innerNodes[index % innerNodes.length]));
        outerNodes.forEach((node, index) => graph.createAndAddEdge(node, innerNodes[index * 2 % innerNodes.length]));
        return graph;
    };
}
