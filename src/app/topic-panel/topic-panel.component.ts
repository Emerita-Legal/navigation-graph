import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from './_services/topic.service';
import { TopicRepositoryService } from './_services/topic-repository.service';

@Component({
  selector: 'app-topic-panel',
  templateUrl: './topic-panel.component.html',
  styleUrls: ['./topic-panel.component.css'],
  providers: [TopicService, TopicRepositoryService],
})
export class TopicPanelComponent implements OnInit {
  topicId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private topicRepository: TopicRepositoryService,
    private topicService: TopicService
  ) {}

  ngOnInit() {
    this.route.firstChild?.params.subscribe((params) => {
      const topic = this.topicRepository.getTopic(+params['id']);
      this.topicService.emitGraphMasterTopic(topic);
    });
  }

  getMaxHeight() {
    return window.innerHeight - 70 + 'px';
  }
}
