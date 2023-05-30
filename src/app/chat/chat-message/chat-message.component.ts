import { Component, Input } from '@angular/core';
import { Message } from '../chat-elements/message';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
})
export class ChatMessageComponent {
  @Input() message?: Message;
}
