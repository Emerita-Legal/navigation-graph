import {
  AfterViewInit,
  Component,
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

  constructor(
    private graphService: GraphService,
    private topicService: TopicService
  ) {}

  ngAfterViewInit(): void {
    this.topicService.graphMasterTopic$.subscribe((topic) => {
      this.drawGrap(topic);
    });
  }

  drawGrap(topic: Topic) {
    this.initLayout(topic).draw();
    this.applyEffects();
  }

  private initLayout(topic: Topic): Layout {
    const SVG = d3
      .select('#navigation-container')
      .append('svg')
      .attr('width', '80%');

    this.updateWidth();

    SVG.attr('height', this.height);

    return new Layout(
      this.graphService.generateGraph(topic),
      d3.select('svg'),
      {
        width: this.width,
      }
    );
  }

  // private resetSVG(): void {
  //   if (this.SVG) {
  //     this.SVG.remove();
  //     this.initSVG();
  //   }
  // }

  private updateWidth(): void {
    this.width = document.querySelector('svg')?.clientWidth!;
    this.height = this.width;
  }

  private applyEffects(): void {
    applyScaleOnHover(1.1);
    highlightEdgesOnClick();
  }
}
