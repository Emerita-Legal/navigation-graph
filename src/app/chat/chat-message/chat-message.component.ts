import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
})
export class ChatMessageComponent {
  type: 'received' | 'sent' = 'sent';
  text: string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.';
}
