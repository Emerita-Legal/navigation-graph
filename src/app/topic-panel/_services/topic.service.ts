import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Topic } from '../_types/topic';

@Injectable()
export class TopicService {
  private masterTopic?: Topic;

  private readonly graphMasterTopic: ReplaySubject<Topic> =
    new ReplaySubject<Topic>();
  graphMasterTopic$ = this.graphMasterTopic.asObservable();

  private readonly graphTopic: ReplaySubject<Topic> =
    new ReplaySubject<Topic>();
  graphTopic$ = this.graphTopic.asObservable();

  constructor() {}

  emitGraphMasterTopic(topic: Topic) {
    this.masterTopic = topic;
    this.graphMasterTopic.next(topic);
    this.emitGraphTopic(topic.id);
  }

  emitGraphTopic(topicId: number) {
    const topic = this.getTopicById(this.masterTopic!, topicId);
    if (!topic) {
      throw new Error('Topic not found');
    }
    this.graphTopic.next(topic);
  }

  private getTopicById(topic: Topic, topicId: number): Topic | undefined {
    if (!topic) return;
    if (topic.id === topicId) {
      return topic;
    }
    if (topic.childs) {
      for (let i = 0; i < topic.childs.length; i++) {
        const result = this.getTopicById(topic.childs[i], topicId);
        if (result) {
          return result;
        }
      }
    }
    return;
  }
}


