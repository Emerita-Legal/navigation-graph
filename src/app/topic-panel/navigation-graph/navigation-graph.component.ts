import {
  AfterViewInit,
  Component,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { GraphService } from './_services/graph.service';
import { applyScaleOnHover, highlightEdgesOnClick } from '../../effects';
import { Layout } from './graph-elements/layout';
import { Topic } from '../_types/topic';
import { TopicService } from '../_services/topic.service';

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
    setTimeout(() => {
      this.resetSVG();
    }, 100);
  }

  ngAfterViewInit(): void {
    this.createSVG();
    window.addEventListener('load', () => {
      this.topicService.graphMasterTopic$.subscribe((topic) => {
        this.topic = topic;
      });
      this.drawGraph();
    });
  }

  private drawGraph() {
    const lawyout = this.initLayout();
    lawyout.onCircleClickEmitter.subscribe((topicEvent) => {
      this.topicService.emitGraphTopic(topicEvent.id);
    });
    lawyout.draw();
    this.applyEffects();
  }

  private createSVG() {
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
    return new Layout(
      this.graphService.generateGraph(this.topic!),
      d3.select('svg'),
      {
        width: container.width,
        height: container.height,
      }
    );
  }

  private resetSVG(): void {
    d3.select('#navigation-container svg').remove();
    this.createSVG();
    this.initLayout().draw();
  }

  private applyEffects(): void {
    applyScaleOnHover(1.1);
    highlightEdgesOnClick();
  }
}
