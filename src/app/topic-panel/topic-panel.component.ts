import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-panel',
  templateUrl: './topic-panel.component.html',
  styleUrls: ['./topic-panel.component.css'],
})
export class TopicPanelComponent implements OnInit {
  topicId: number | undefined;

  constructor(private route: ActivatedRoute) {}
  getMaxHeight() {
    return window.innerHeight - 20 + 'px';
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.topicId = +params['id'];
    });
  }
}
