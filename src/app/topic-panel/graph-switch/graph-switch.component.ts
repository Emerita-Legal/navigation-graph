import { Component, Input } from '@angular/core';
import { TopicService } from '../_services/topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph-switch',
  templateUrl: './graph-switch.component.html',
  styleUrls: ['./graph-switch.component.css'],
  providers: [TopicService],
})
export class GraphSwitchComponent {
  switchValue = 'graph';
  switchOptions = [
    {
      label: 'Grafo',
      value: 'graph',
    },
    {
      label: 'Chat',
      value: 'chat',
    },
  ];
  @Input() topicId?: number;
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url.includes('chat')) {
      this.switchValue = 'chat';
    }
  }

  onSwitchClick($event: any) {
    const selectedOption = $event.option;
    if (selectedOption.value === 'chat') {
      this.router.navigate(['panel', 'chat']);
    } else {
      this.router.navigate(['panel', 'graph', this.topicId]);
    }
  }
}
