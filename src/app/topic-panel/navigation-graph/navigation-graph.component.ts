import { Component, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { GraphService } from '../../_services/graph.service';
import { applyScaleOnHover, highlightEdgesOnClick } from '../../effects';

@Component({
  selector: 'app-navigation-graph',
  templateUrl: './navigation-graph.component.html',
  styleUrls: ['./navigation-graph.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [GraphService]
})
export class NavigationGraphComponent {
  private SVG: d3.Selection<d3.BaseType, unknown, HTMLElement, any> | null = null;
  private width = 800;
  private height = 800;

  constructor(private graphService: GraphService) {
  }

  ngAfterViewInit() {
    this.initSVG();
    this.graphService.getGraphInstance().setWidth(this.width).draw(d3.select("svg"));
    this.applyEffects();
  }

  private initSVG() {
    this.SVG = d3.select("#navigation-container");
    this.SVG
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);
  }

  private applyEffects() {
    applyScaleOnHover(1.1)
    highlightEdgesOnClick();
  }
}