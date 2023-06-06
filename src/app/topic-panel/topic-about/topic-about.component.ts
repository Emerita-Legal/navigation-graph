import { Component } from '@angular/core';
import { TopicService } from '../_services/topic.service';
import { Topic } from '../_types/topic';
import { TopicRepositoryService } from '../_services/topic-repository.service';

@Component({
  selector: 'app-topic-about',
  templateUrl: './topic-about.component.html',
  styleUrls: ['./topic-about.component.css'],
})
export class TopicAboutComponent {
  topic: Topic | undefined;
  breadcrumbs: string[] = [];
  description: { value?: string; expanded: boolean } = {
    value: '',
    expanded: false,
  };

  constructor(
    private topicService: TopicService,
    private topicRepository: TopicRepositoryService
  ) {}

  ngOnInit() {
    this.topicService.graphTopic$.subscribe((topic) => {
      this.topic = topic;
      this.topic.title = capitalizeFirst(this.topic.title);
      this.description.value = this.descriptionBeforeExpand();
      this.description.expanded = false;
      this.breadcrumbs = this.topicRepository.getTopicsParents(topic.id);
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

function capitalizeFirst(string: string) {
  return string[0].toUpperCase() + string.slice(1, string.length).toLowerCase();
}
