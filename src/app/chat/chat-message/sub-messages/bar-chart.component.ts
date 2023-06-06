import { Component, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  template: `<svg id="bar-chart"></svg>`,
})
export class BarChartComponent {
  @Input() data: number[] = [];
  private id: number = 1;

  constructor() {}

  ngOnInit() {
    this.draw();
  }

  getId() {
    return this.id;
  }

  draw(): void {
    // Define the dimensions of the SVG container and the bar graph
    const svgWidth = 300;
    const svgHeight = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const chartWidth = svgWidth - margin.left - margin.right;
    const chartHeight = svgHeight - margin.top - margin.bottom;

    // Create the SVG container
    const svg = d3
      .select('#bar-chart')
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    // Create the chart group within the SVG container
    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Define the scales
    const xScale = d3
      .scaleBand()
      .domain(this.data.map((d, i) => i.toString()))
      .range([0, chartWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.data) as number])
      .range([chartHeight, 0]);

    // Create the bars
    chart
      .selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any, i: number) => xScale(i.toString()) as number)
      .attr('y', (d) => yScale(d) as number)
      .attr('height', (d) => chartHeight - yScale(d))
      .attr('width', xScale.bandwidth());

    // Add labels to the bars
    chart
      .selectAll('.label')
      .data(this.data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr(
        'x',
        (d: any, i: number) =>
          (xScale(i.toString()) as number) + xScale.bandwidth() / 2
      )
      .attr('y', (d) => (yScale(d) as number) - 5)
      .text((d) => d);

    // Add x-axis
    const xAxis = d3.axisBottom(xScale);
    chart
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${chartHeight})`)
      .call(xAxis);

    // Add y-axis
    const yAxis = d3.axisLeft(yScale);
    chart.append('g').attr('class', 'y-axis').call(yAxis);
  }
}
