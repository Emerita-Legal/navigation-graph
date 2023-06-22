import { Component, Input } from '@angular/core';
import { Message } from '../../chat-elements/message';
import { SubMessage } from '../../chat-elements/subMessage';

@Component({
  selector: 'app-message-received',
  templateUrl: './message-received.component.html',
  styleUrls: ['./message-received.component.css'],
})
export class MessageReceivedComponent {
  @Input() message?: Message;
  subMessages: SubMessage[] = [];
  ngOnInit() {
    if (this.message) {
      setTimeout(() => {
        this.subMessages.push(this.message!.getSubMessages()[0]);
        setTimeout(() => {
          this.subMessages.push(this.message!.getSubMessages()[1]);
          setTimeout(() => {
            this.subMessages.push(this.message!.getSubMessages()[2]);
            setTimeout(() => {
              this.subMessages.push(this.message!.getSubMessages()[3]);
              setTimeout(() => {
                this.subMessages.push(this.message!.getSubMessages()[4]);
              }, 500);
            }, 1000);
          }, 1000);
        }, 4500);
      }, 1000);
    }
  }
}
