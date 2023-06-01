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
  description: { value?: string; expanded: boolean } = {
    value: '',
    expanded: false,
  };

  constructor(private topicService: TopicService) {}

  ngOnInit() {
    this.topicService.graphTopic$.subscribe((topic) => {
      this.topic = topic;
      this.description.value = this.descriptionBeforeExpand();
      console.log(this.description);
    });
  }

  onExpand() {
    this.description.value = this.topic?.description;
    this.description.expanded = true;
  }

  descriptionBeforeExpand() {
    return this.topic?.description.split('.')[0] + '.';
  }
}
