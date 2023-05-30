import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { GraphService } from './_services/graph.service';
import { applyScaleOnHover, highlightEdgesOnClick } from '../../effects';
import { Layout } from './graph-elements/layout';

@Component({
  selector: 'app-navigation-graph',
  templateUrl: './navigation-graph.component.html',
  styleUrls: ['./navigation-graph.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [GraphService]
})
export class NavigationGraphComponent {
  private width = 1100;
  private height = 1100;

  @Input() topicId: number | undefined;

  constructor(private graphService: GraphService) {}

  ngAfterViewInit(): void {
    this.initLayout().draw();
    this.applyEffects();
  }

  private initLayout(): Layout {
    const SVG = d3.select("#navigation-container")
      .append("svg")
      .attr("width", '100%');

    this.updateWidth();

    SVG.attr("height", this.height);

    if(!this.topicId) {
      throw new Error("No topic Id provided")
    }
    return new Layout(this.graphService.getGraphInstance(this.topicId), d3.select("svg"), {
      width: this.width
    });
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
    applyScaleOnHover(1.1)
    highlightEdgesOnClick();
  }
}