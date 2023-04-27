import { Component, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { GraphService } from '../../_services/graph.service';
import { applyScaleOnHover, highlightEdgesOnClick } from '../../effects';
import { Graph } from './graph-elements/graph';

@Component({
  selector: 'app-navigation-graph',
  templateUrl: './navigation-graph.component.html',
  styleUrls: ['./navigation-graph.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [GraphService]
})
export class NavigationGraphComponent {
  private SVG: d3.Selection<d3.BaseType, unknown, HTMLElement, any> | null = null;
  private width = 1100;
  private height = 1100;
  private graph: Graph;

  constructor(private graphService: GraphService) {
    this.graph = this.graphService.getGraphInstance().setWidth(this.width);
  }

  ngAfterViewInit(): void {
    this.initSVG();
    if (this.SVG) {
      this.graph.draw(this.SVG);
    }
    this.applyEffects();
  }

  private initSVG(): void {
    const svg = d3.select("#navigation-container")
      .append("svg")
      .attr("width", '100%');

    this.updateWidth();

    svg.attr("height", this.height);

    this.SVG = d3.select("svg");
  }

  private resetSVG(): void {
    if (this.SVG) {
      this.SVG.remove();
      this.initSVG();
    }
  }

  private updateWidth(): void {
    this.width = document.querySelector('svg')?.clientWidth!;
    this.height = this.width;
  }

  private applyEffects(): void {
    applyScaleOnHover(1.1)
    highlightEdgesOnClick();
  }
}