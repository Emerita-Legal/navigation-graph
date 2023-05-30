import { Injectable } from '@angular/core';
import {
  Graph,
  HierarchyLevels,
} from '../graph-elements/graph';
import { Topic } from '../../_types/topic';
import { Node } from '../graph-elements/node';
import { topics } from '../../data/topics';

@Injectable()
export class GraphService {
  constructor() {}
  /* This should be the API connection */
  public getGraphInstance(topicId: number): Graph {
    const topic = topics.find(topic => topic.id === topicId)
    if(!topic) {
      throw new Error("Topic not found")
    }
    return this.generateGraph(topic);
  }

  private generateGraph(centralTopic: Topic): Graph {
    const graph = new Graph([], []);
    graph.addNode(centralTopic.name, HierarchyLevels.central);
    let outerNodes: Array<Node> = [];
    const innerNodes: Array<Node> = [];
    centralTopic.childs?.forEach((child) => {
      innerNodes.push(graph.addNode(child.name, HierarchyLevels.inner));
      child.childs?.forEach((grandson) => {
        outerNodes.push(graph.addNode(grandson.name, HierarchyLevels.outer));
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
