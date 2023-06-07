import { Component, Input } from '@angular/core';
import { Message } from '../../chat-elements/message';

@Component({
  selector: 'app-message-received',
  templateUrl: './message-received.component.html',
  styleUrls: ['./message-received.component.css'],
})
export class MessageReceivedComponent {
  @Input() message?: Message;
}
