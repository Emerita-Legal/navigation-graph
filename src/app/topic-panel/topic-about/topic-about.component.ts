import { Component } from '@angular/core';
import { TopicService } from '../_services/topic.service';
import { Topic } from '../_types/topic';

@Component({
  selector: 'app-topic-about',
  templateUrl: './topic-about.component.html',
  styleUrls: ['./topic-about.component.css'],
})
export class TopicAboutComponent {
  topic: Topic | undefined;

  constructor(private topicService: TopicService) {}

  ngOnInit() {
    this.topicService.graphTopic$.subscribe((topic) => (this.topic = topic));
  }
}
