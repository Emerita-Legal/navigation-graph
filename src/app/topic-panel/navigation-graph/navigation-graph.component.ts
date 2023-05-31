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
    this.resetSVG();
  }

  ngAfterViewInit(): void {
    this.topicService.graphMasterTopic$.subscribe((topic) => {
      this.topic = topic;
      this.drawGraph();
    });
  }

  private drawGraph() {
    setTimeout(() => {
      d3.select('#navigation-container svg').remove();
      this.createSVG();
      const lawyout = this.initLayout();
      lawyout.onCircleClickEmitter.subscribe((e) => {
        console.log('yea', e);
      });
      lawyout.draw();
      this.applyEffects();
    }, 100);
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
    if (!this.topic) throw new Error('Topic not initialized yet');
    return new Layout(
      this.graphService.generateGraph(this.topic),
      d3.select('svg'),
      container.width,
      container.height
    );
  }

  private resetSVG(): void {
    this.drawGraph();
  }

  private applyEffects(): void {
    applyScaleOnHover(1.1);
    highlightEdgesOnClick();
  }
}
