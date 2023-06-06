import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Message } from '../../chat-elements/message';
import { BarChartComponent } from '../sub-messages/bar-chart.component';
import { SubMessageDirective } from '../subMessageDirective';

@Component({
  selector: 'app-message-received',
  templateUrl: './message-received.component.html',
  styleUrls: ['./message-received.component.css'],
})
export class MessageReceivedComponent {
  @Input() message?: Message;
}
