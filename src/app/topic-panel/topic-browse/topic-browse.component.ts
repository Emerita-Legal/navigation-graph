import { Component } from '@angular/core';
import { Topic } from '../_types/topic';
import { TopicService } from '../_services/topic.service';
import { UserService } from '../../shared/_services/user.service';

@Component({
  selector: 'app-topic-browse',
  templateUrl: './topic-browse.component.html',
  styleUrls: ['./topic-browse.component.css'],
})
export class TopicBrowseComponent {
  user: { type: string } | null = null;
  topic: Topic | undefined;

  capitalizeFirst = (string: string) => {
    return (
      string[0].toUpperCase() + string.slice(1, string.length).toLowerCase()
    );
  };

  constructor(
    private topicService: TopicService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.topicService.graphTopic$.subscribe((topic) => {
      this.topic = topic;
    });
    this.topicService.chatTopic$.subscribe((topic) => {
      this.topic = topic;
    });
    this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  onDescriptionClick(topicId: number) {
    this.topicService.emitGraphTopic(topicId);
  }
}
