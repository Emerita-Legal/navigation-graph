import {
  AfterViewInit,
  Component,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { GraphService } from './_services/graph.service';
import { applyEffects } from '../../effects';
import { Layout } from './graph-elements/layout';
import { Topic } from '../_types/topic';
import { TopicService } from '../_services/topic.service';
import { debounce, debounceTime, last, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-navigation-graph',
  templateUrl: './navigation-graph.component.html',
  styleUrls: ['./navigation-graph.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [GraphService],
})
export class NavigationGraphComponent implements AfterViewInit {
  private topic?: Topic;
  private SVG?: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
  constructor(
    private graphService: GraphService,
    private topicService: TopicService
  ) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.drawGraph();
  }

  ngAfterViewInit(): void {
    this.topicService.graphMasterTopic$.subscribe((topic) => {
      this.topic = topic;
      this.drawGraph();
    });
  }

  private drawGraph() {
    setTimeout(() => {
      this.createSVG();
      const layout = this.initLayout();
      this.subscribeToGraphEvents(layout);
      layout.draw();
      applyEffects();
    }, 100);
  }

  private subscribeToGraphEvents(layout: Layout) {
    layout.onCircleClickEmitter.subscribe((topicEvent) => {
      this.topicService.emitGraphTopic(topicEvent.id);
    });
    this.getLastTopicValue().subscribe((lastTopic) => {
      this.clickOnNode(lastTopic.id);
    });
  }

  private getLastTopicValue() {
    return this.topicService.graphTopic$.pipe(debounceTime(0), take(1));
  }

  private createSVG() {
    d3.select('#navigation-container svg').remove();
    this.SVG = d3
      .select('#navigation-container')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');
  }

  private initLayout(): Layout {
    const container = {
      width: parseFloat(this.SVG!.style('width')),
      height: parseFloat(this.SVG!.style('height')),
    };
    if (!this.topic) throw new Error('Topic not initialized yet');
    return new Layout(
      this.graphService.generateGraph(this.topic),
      d3.select('svg'),
      container.width,
      container.height
    );
  }

  private clickOnNode(nodeId: number) {
    const node = document.getElementById(`${nodeId}`);
    if (node) {
      node.dispatchEvent(new MouseEvent('click'));
    }
  }
}
