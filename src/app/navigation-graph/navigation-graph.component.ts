import { Component, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { GraphService } from '../_services/graph.service';

@Component({
  selector: 'app-navigation-graph',
  templateUrl: './navigation-graph.component.html',
  styleUrls: ['./navigation-graph.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [GraphService]
})
export class NavigationGraphComponent {
  private SVG: d3.Selection<d3.BaseType, unknown, HTMLElement, any> | null = null;

  constructor(private graphService: GraphService) {
  }

  ngAfterViewInit() {
    this.initSVG();
    this.graphService.getGraphInstance().draw(d3.select("svg"));
  }

  private initSVG() {
    this.SVG = d3.select("#navigation-container");
    this.SVG
      .append("svg")
      .attr("width", 800)
      .attr("height", 800);
  }
}