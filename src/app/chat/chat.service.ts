import { Injectable } from '@angular/core';
import { Conversation } from './chat-elements/conversation';
import { Message } from './chat-elements/message';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { TopicService } from '../topic-panel/_services/topic.service';

@Injectable()
export class ChatService {
  private newMessageEmmiter = new ReplaySubject<Message>();
  public newMessage$ = this.newMessageEmmiter.asObservable();
  private isLoadingEmmiter = new BehaviorSubject<boolean>(false);
  public isResponseLoading$ = this.isLoadingEmmiter.asObservable();

  private conversation = new Conversation();

  constructor(private topicService: TopicService) {}

  addMessage(inputMessage: Message) {
    this.conversation.addMessage(inputMessage);
    this.newMessageEmmiter.next(inputMessage);
    this.isLoadingEmmiter.next(true);
    setTimeout(() => {
      const responseMessage =
        this.conversation.addAutomaticResponse(inputMessage);
      this.newMessageEmmiter.next(responseMessage);
      this.topicService.emitChatTopic();
      this.isLoadingEmmiter.next(false);
    }, 1000);
  }

  getConversation(): Conversation {
    return this.conversation;
  }
}
