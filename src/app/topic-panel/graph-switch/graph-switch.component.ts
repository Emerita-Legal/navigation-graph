import { Component, Input } from '@angular/core';
import { TopicService } from '../_services/topic.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e: any) => {
        if (e.url.includes('chat')) {
          this.switchValue = 'chat';
        } else {
          this.switchValue = 'graph';
        }
      });
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
