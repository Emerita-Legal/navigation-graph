import { Injectable } from '@angular/core';
import { Conversation } from './chat-elements/conversation';
import { Message } from './chat-elements/message';
import { BehaviorSubject, Observable, ReplaySubject, Subject, debounceTime } from 'rxjs';
import { TopicService } from '../topic-panel/_services/topic.service';

@Injectable()
export class ChatService {
  private newMessageEmmiter = new ReplaySubject<Message>();
  public newMessage$ = this.newMessageEmmiter.asObservable();

  private conversation = new Conversation();

  constructor(private topicService: TopicService) {}

  addMessage(inputMessage: Message) {
    this.conversation.addMessage(inputMessage);
    this.newMessageEmmiter.next(inputMessage);
    const responseMessage = this.conversation.addAutomaticResponse(inputMessage);
    this.newMessageEmmiter.next(responseMessage);
    this.topicService.emitChatTopic();
  }

  getConversation(): Conversation {
    return this.conversation;
  }
}
