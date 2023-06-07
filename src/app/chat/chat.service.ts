import { Injectable } from '@angular/core';
import { Conversation } from './chat-elements/conversation';
import { Message } from './chat-elements/message';
import { BehaviorSubject, Observable, Subject, debounceTime } from 'rxjs';

@Injectable()
export class ChatService {
  private newMessageEmmiter = new Subject<Message>();
  public newMessage$ = this.newMessageEmmiter.asObservable();

  private conversation = new Conversation();

  constructor() {}

  addMessage(inputMessage: Message) {
    this.conversation.addMessage(inputMessage);
    this.newMessageEmmiter.next(inputMessage);
    const responseMessage = this.conversation.addAutomaticResponse(inputMessage);
    this.newMessageEmmiter.next(responseMessage);
  }

  getConversation(): Conversation {
    return this.conversation;
  }
}
