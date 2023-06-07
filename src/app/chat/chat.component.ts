import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;

  constructor(private chatService: ChatService) {
    this.conversationSubscription = this.chatService.newMessage$.subscribe(
      (newMessage) => {
        this.messages.push(newMessage);
        this.scrollToBottom();
      }
    );
  }

  private scrollToBottom(): void {
    if (this.chatContainer) {
      setTimeout(
        () =>
          (this.chatContainer.nativeElement.scrollTop =
            this.chatContainer.nativeElement.scrollHeight),
        0
      );
    }
  }

  ngOnDestroy() {
    this.conversationSubscription.unsubscribe();
  }
}
