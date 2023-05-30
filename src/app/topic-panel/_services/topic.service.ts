import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";
import { Topic } from "../_types/topic";

@Injectable()
export class TopicService {
    private readonly topicState: ReplaySubject<Topic> = new ReplaySubject<Topic>()
    topic$ = this.topicState.asObservable();

    constructor() {}

    emitTopic(topic: Topic) {
        this.topicState.next(topic);
    }


}