import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { Subscription } from 'rxjs';
import { Message } from './chat-elements/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  messages: Message[] = [];
  private conversationSubscription: Subscription;

  constructor(private chatService: ChatService) {
    this.conversationSubscription = this.chatService
      .getConversationObservable()
      .subscribe((conversation) => {
        this.messages = conversation.getMessages();
        console.log('Subscribe');
      });
  }

  ngOnDestroy() {
    this.conversationSubscription.unsubscribe();
  }
}
