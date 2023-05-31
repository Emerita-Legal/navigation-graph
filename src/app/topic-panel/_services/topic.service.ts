import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Topic } from '../_types/topic';

@Injectable()
export class TopicService {
  private readonly graphMasterTopic: ReplaySubject<Topic> =
    new ReplaySubject<Topic>();
  graphMasterTopic$ = this.graphMasterTopic.asObservable();

  private readonly graphTopic: ReplaySubject<Topic> =
    new ReplaySubject<Topic>();
  graphTopic$ = this.graphTopic.asObservable();

  constructor() {}

  emitGraphMasterTopic(topic: Topic) {
    this.graphMasterTopic.next(topic);
    this.graphTopic.next(topic);
  }

  emitGraphTopic(topic: Topic) {
    this.graphTopic.next(topic);
  }
}
