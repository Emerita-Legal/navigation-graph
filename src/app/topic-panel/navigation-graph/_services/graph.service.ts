import { Injectable } from '@angular/core';
import {
  Graph,
  HierarchyLevels,
} from '../graph-elements/graph';
import { Topic } from '../../_types/topic';
import { Node } from '../graph-elements/node';
import { topics } from '../../data/labor';

@Injectable()
export class GraphService {
  constructor() {}
  /* This should be the API connection */
  public getGraphInstance(): Graph {
    return this.generateGraph(topics[0]);
  }

  private generateGraph(centralTopic: Topic): Graph {
    const graph = new Graph([], []);
    graph.addNode(centralTopic.label, HierarchyLevels.central);
    let outerNodes: Array<Node> = [];
    const innerNodes: Array<Node> = [];
    centralTopic.childs?.forEach((child) => {
      innerNodes.push(graph.addNode(child.label, HierarchyLevels.inner));
      child.childs?.forEach((grandson) => {
        outerNodes.push(graph.addNode(grandson.label, HierarchyLevels.outer));
      });
    });
    outerNodes.forEach((node, index) =>
      graph.createAndAddEdge(node, innerNodes[index % innerNodes.length])
    );
    outerNodes.forEach((node, index) =>
      graph.createAndAddEdge(node, innerNodes[(index * 2) % innerNodes.length])
    );
    return graph;
  }
}
