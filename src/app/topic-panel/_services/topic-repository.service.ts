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
}
