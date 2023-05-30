import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { Message } from '../chat-elements/message';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
})
export class ChatInputComponent {
  constructor(private router: Router, private chatService: ChatService) {}
  onMessageSent() {
    this.chatService.addMessage(
      new Message(
        0,
        (document.querySelector('textarea') as any).value,
        new Date(),
        'sent'
      )
    );
    if (this.router.url.includes('graph')) {
      this.router.navigate(['/panel/chat']);
    }
  }

  onKeyPress(event: any) {
    if (event.ctrlKey && event.key === 'Enter') {
      (document.querySelector('textarea') as any).value += '\n';
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.onMessageSent();
    }
  }
}
