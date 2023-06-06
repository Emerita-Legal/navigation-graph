import { Injectable } from '@angular/core';
import { Topic } from '../_types/topic';
import { topics } from '../data/topics';

@Injectable()
export class TopicRepositoryService {
  constructor() {}

  /* This should be the API connection */
  public getTopic(topicId: number): Topic {
    const topic = topics.find((topic) => topic.id === topicId);
    if (!topic) {
      throw new Error('Topic not found');
    }
    return topic;
  }

  public getTopicsParents(topicId: number): string[] {
    return getTopicParents(topicId, topics).map((el) => el.name);
  }
}

function getTopicParents(
  topicId: number,
  levelTopics: Topic[],
  parents: Topic[] = []
) {
  const originalTopics = topics;
  for (const topic of levelTopics.filter((t) => !!t.childs)) {
    if (!!topic.childs?.find((t) => t.id === topicId)) {
      parents.push(topic);
      getTopicParents(topic.id, originalTopics, parents);
    } else {
      getTopicParents(topicId, topic.childs! ?? [], parents);
    }
  }
  return parents;
}
