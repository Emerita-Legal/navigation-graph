import { Injectable } from '@angular/core';
import { Graph, HierarchyLevels } from '../graph-elements/graph';
import { Topic } from '../../_types/topic';
import { Node } from '../graph-elements/node';
import { topics } from '../../data/topics';

@Injectable()
export class GraphService {
  constructor() {}

  generateGraph(centralTopic: Topic): Graph {
    const graph = new Graph([], []);
    graph.addNode(centralTopic.name, HierarchyLevels.central);
    centralTopic.childs?.forEach((child) => {
      const innerNode = graph.addNode(child.name, HierarchyLevels.inner, child.id);
      child.childs?.forEach((grandson) => {
        const outerNode = graph.addNode(grandson.name, HierarchyLevels.outer, grandson.id);
        graph.createAndAddEdge(outerNode, innerNode)
      });
    });
    return graph;
  }
}
