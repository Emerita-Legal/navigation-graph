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
        const innerNodes = Array(9).fill(null).map((_, index) => new Node(index + 1));
        innerNodes.forEach((node, index) => {
            if (innerNodes[index + 1]) {
                node.addEdge(new Edge(node, innerNodes[index + 1], { class: 'innerEdge' }))
            }
            else node.addEdge(new Edge(node, innerNodes[0], { class: 'innerEdge' }))
        });
        const outerNodes = Array(30).fill(null).map((_, index) => new Node(index + innerNodes.length + 1))
        outerNodes.forEach((node, index) => {
            if (outerNodes[index + 1]) {
                node.addEdge(new Edge(node, outerNodes[index + 1], { class: 'outerEdge' }))
            }
            else node.addEdge(new Edge(node, outerNodes[0], { class: 'outerEdge' }))
        });
        outerNodes.forEach((node, index) => node.addEdge(new Edge(node, innerNodes[index % innerNodes.length], { curveType: 'smooth', class: 'link' })));
        return new Graph(centralNode, innerNodes, outerNodes);
    };
}
