import { Injectable } from '@angular/core';
import { Conversation } from './chat-elements/conversation';
import { Message } from './chat-elements/message';
import { BehaviorSubject, Observable, debounceTime } from 'rxjs';
import { SubMessage } from './chat-elements/subMessage';
import { TextComponent } from './chat-message/sub-messages/text.component';

@Injectable()
export class ChatService {
  messageId = 0;
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
        new Message(++this.messageId, `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Labore a voluptates corporis illum quae, quasi esse dicta vitae maxime aspernatur? 
        Earum atque reiciendis odit molestiae culpa quisquam fuga repellat`,
        new Date(), 'received', [
          new SubMessage(TextComponent, {
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Labore a voluptates corporis illum quae, quasi esse dicta vitae maxime aspernatur? 
              Earum atque reiciendis odit molestiae culpa quisquam fuga repellat`,
          }),

          new SubMessage(TextComponent, {
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Labore a voluptates corporis illum quae, quasi esse dicta vitae maxime aspernatur? 
              Earum atque reiciendis odit molestiae culpa quisquam fuga repellat`,
          })
        ])
      );
    }, 1000);
  }
}
