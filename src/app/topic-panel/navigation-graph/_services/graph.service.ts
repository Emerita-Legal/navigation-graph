import { Injectable } from '@angular/core';
import { Graph, HierarchyLevels } from '../graph-elements/graph';
import { Topic } from '../../_types/topic';
import { Node } from '../graph-elements/node';

@Injectable()
export class GraphService {
  constructor() {}

  generateGraph(centralTopic: Topic): Graph {
    const addedNodes: Array<Node> = [];
    const graph = new Graph([], []);
    graph.addNode(centralTopic.name, HierarchyLevels.central);
    centralTopic.childs?.forEach((child) => {
      const innerNode = graph.addNode(child.name, HierarchyLevels.inner, child.id);
      child.childs?.forEach((grandson) => {
        let outerNode: Node;
        const existingNode = addedNodes.find(node => node.getId() == grandson.id);
        if(!existingNode) {
          outerNode = graph.addNode(grandson.name, HierarchyLevels.outer, grandson.id);
          addedNodes.push(outerNode)
        } else {
          outerNode = existingNode;
        }
        graph.createAndAddEdge(outerNode, innerNode);
      });
    });
    return graph;
  }
}
