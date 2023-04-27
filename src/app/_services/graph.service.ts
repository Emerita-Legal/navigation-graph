import { Injectable } from '@angular/core';
import { Graph } from '../topic-panel/navigation-graph/graph-elements/graph';
import { Node } from '../topic-panel/navigation-graph/graph-elements/node';
import { Edge } from '../topic-panel/navigation-graph/graph-elements/edge';

@Injectable()
export class GraphService {

    constructor() { }
    /* This should be the API connection */
    public getGraphInstance(): Graph {
        const centralNode = new Node(0);
        const innerNodes = Array(6).fill(null).map((_, index) => new Node(index + 1));
        const outerNodes = Array(40).fill(null).map((_, index) => new Node(index + innerNodes.length + 1));
        outerNodes.forEach((node, index) => node.addEdge(new Edge(node, innerNodes[index % innerNodes.length], { curveType: 'smooth', class: 'link' })));
        outerNodes.forEach((node, index) => node.addEdge(new Edge(node, innerNodes[index * 2 % innerNodes.length], { curveType: 'smooth', class: 'link' })));
        outerNodes.forEach((node, index) => node.addEdge(new Edge(node, innerNodes[index * 3 % innerNodes.length], { curveType: 'smooth', class: 'link' })));

        return new Graph(centralNode, innerNodes, outerNodes);
    };
}
