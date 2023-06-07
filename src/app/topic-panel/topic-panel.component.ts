import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TopicService } from './_services/topic.service';
import { TopicRepositoryService } from './_services/topic-repository.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-topic-panel',
  templateUrl: './topic-panel.component.html',
  styleUrls: ['./topic-panel.component.css'],
  providers: [TopicRepositoryService],
})
export class TopicPanelComponent implements OnInit {
  topicId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private topicRepository: TopicRepositoryService,
    private topicService: TopicService,
    private cdr: ChangeDetectorRef
  ) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.route.firstChild?.params.subscribe((params) => {
      if (!params['id']) {
        this.router.navigate(['/']);
        return;
      }
      const topic = this.topicRepository.getTopic(+params['id']);
      this.topicId = topic.id;
      this.topicService.emitGraphCentralTopic(topic);
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e: any) => {
        if (e.url.includes('chat')) {
          this.topicService.refreshChatTopic();
        } else {
          this.topicService.refreshGraphTopic();
        }
      });
  }

  getMaxHeight() {
    return `${window.innerHeight - window.innerHeight * 0.22}px`;
  }
}
