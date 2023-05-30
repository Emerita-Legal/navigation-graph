import { Injectable } from '@angular/core';
import { Conversation } from './chat-elements/conversation';
import { Message } from './chat-elements/message';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ChatService {
  private conversation: BehaviorSubject<Conversation> =
    new BehaviorSubject<Conversation>(new Conversation());
  constructor() {}

  addMessage(message: Message) {
    this.conversation.getValue().addMessage(message);
    this.generateResponse(message);
    this.conversation.next(this.conversation.getValue());
  }

  getConversationObservable(): Observable<Conversation> {
    return this.conversation.asObservable();
  }

  private generateResponse(message: Message) {
    /* Timeout to mock real response generation time */
    setTimeout(() => {
      this.conversation.getValue().addMessage(
        new Message(
          0,
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Labore a voluptates corporis illum quae, quasi esse dicta vitae maxime aspernatur? 
            Earum atque reiciendis odit molestiae culpa quisquam fuga repellat`,
          new Date(),
          'received'
        )
      );
    }, 1000);
  }
}
