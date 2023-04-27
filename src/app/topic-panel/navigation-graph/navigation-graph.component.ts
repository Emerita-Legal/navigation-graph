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

  ngAfterViewInit(): void {
    this.initSVG();
    if (this.SVG) {
      this.graphService.getGraphInstance().setWidth(this.width).draw(this.SVG);
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