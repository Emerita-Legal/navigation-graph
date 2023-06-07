import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Topic } from '../_types/topic';
import { chatTopic } from '../data/topics';

@Injectable()
export class TopicService {
  private centralTopic?: Topic;
  private outerTopic?: Topic;
  private chatTopic?: Topic;

  private readonly graphCentralTopic: ReplaySubject<Topic> =
    new ReplaySubject<Topic>();
  graphCentralTopic$ = this.graphCentralTopic.asObservable();

  private readonly graphTopic: ReplaySubject<Topic> =
    new ReplaySubject<Topic>();
  graphTopic$ = this.graphTopic.asObservable();

  private readonly chatTopicSubject: ReplaySubject<Topic> =
    new ReplaySubject<Topic>();
  chatTopic$ = this.chatTopicSubject.asObservable();

  constructor() {}

  emitGraphCentralTopic(topic: Topic) {
    this.centralTopic = topic;
    this.graphCentralTopic.next(topic);
    this.emitGraphTopic(topic.id);
  }

  emitGraphTopic(topicId: number) {
    const topic = this.getTopicById(this.centralTopic!, topicId);
    if (!topic) {
      throw new Error('Topic not found');
    }
    this.outerTopic = topic;
    if (!this.chatTopic) {
      this.chatTopic = topic;
    }
    this.graphTopic.next(topic);
  }

  refreshGraphTopic() {
    if (this.outerTopic) {
      this.graphTopic.next(this.outerTopic);
    }
  }

  refreshChatTopic() {
    if (this.chatTopic) {
      this.chatTopicSubject.next(this.chatTopic);
    }
  }

  emitChatTopic() {
    this.chatTopic = chatTopic;
    this.chatTopicSubject.next(chatTopic);
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
