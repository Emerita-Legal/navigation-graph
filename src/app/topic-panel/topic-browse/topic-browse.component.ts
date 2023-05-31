import { Component } from '@angular/core';
import { Resource, ResourceTypes, Topic } from '../_types/topic';
import { TopicService } from '../_services/topic.service';

@Component({
  selector: 'app-topic-browse',
  templateUrl: './topic-browse.component.html',
  styleUrls: ['./topic-browse.component.css'],
})
export class TopicBrowseComponent {
  topic: Topic | undefined;

  constructor(private topicService: TopicService) {}

  ngOnInit() {
    this.topicService.graphTopic$.subscribe((topic) => {
      this.topic = topic;
    });
  }
}
