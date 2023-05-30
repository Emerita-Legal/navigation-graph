import { Component, Input } from '@angular/core';
import { Message } from '../../chat-elements/message';

@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css'],
})
export class MessageSentComponent {
  @Input() message?: Message;
}
