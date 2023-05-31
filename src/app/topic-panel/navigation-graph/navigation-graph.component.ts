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
  private width = 1100;
  private height = 1100;
  private topic?: Topic;

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

  drawGraph() {
    this.initLayout().draw();
    this.applyEffects();
  }

  private initLayout(): Layout {
    const SVG = d3
      .select('#navigation-container')
      .append('svg')
      .attr('width', '100%');

    this.updateWidth();

    SVG.attr('height', this.height);

    return new Layout(
      this.graphService.generateGraph(this.topic!),
      d3.select('svg'),
      {
        width: this.width,
        height: this.height,
      }
    );
  }

  private resetSVG(): void {
    d3.select('#navigation-container svg').remove();
    this.initLayout().draw();
  }

  private updateWidth(): void {
    this.width = document.querySelector('svg')?.clientWidth!;
    this.height = this.width - this.width / 6;
  }

  private applyEffects(): void {
    applyScaleOnHover(1.1);
    highlightEdgesOnClick();
  }
}
