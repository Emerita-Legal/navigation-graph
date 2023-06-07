import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ISubMessage } from '../../chat-elements/subMessage';
Chart.register(...registerables);


interface LineChartItem {
  year: number;
  global: number;
  media: number;
}

@Component({
  selector: 'app-line-chart',
  template: `
    <section class="p-3" style="background: #dcdcdc50;">
      <div>
        <h4 class="m-2">{{ heading }}</h4>
      </div>
      <div class="">
        <canvas height="100" #lineChart>{{ chart }}</canvas>
      </div>
      <div class="text-right">
        <span
          class="legend legend-yellow small mr-3"
          *ngIf="heading == 'Evolución de resultados'"
          >Alcanzable</span
        >
        <span
          class="legend legend-yellow small mr-3"
          *ngIf="heading != 'Evolución de resultados'"
          ></span
        >
        <span class="legend legend-blue small mr-3">{{ individualLabel }}</span>
      </div>
    </section>
  `,
})
export class LineChartComponent implements OnInit, ISubMessage {
  heading: string = 'Evolución Resultados';
  @Input() data: LineChartItem[] = [];
  isPercentage = false;
  individualLabel: string = '';

  @ViewChild('lineChart', { static: true }) private chartRef: any;
  chart: any;

  labels: any[] = [];
  globals: any[] = [];
  medias: any = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    this.initDisplayedData();
    if (isPlatformBrowser(this.platformId)) {
      this.initChart();
    }
  }

  initDisplayedData() {
    this.data.map((x) => {
      this.labels.push(x.year);
      this.globals.push(x.global);
      this.medias.push(x.media);
    });
  }

  get suggestedMax(): number {
    let max = 0;
    for (const item of this.data) {
      const tmpMax = Math.max(item.global, item.media);
      if (tmpMax > max) {
        max = tmpMax;
      }
    }
    return max * 1.1;
  }

  initChart() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.isPercentage
              ? this.individualLabel + '(%)'
              : this.individualLabel,
            data: this.globals,
            borderColor: '#03a2c6',
            pointBackgroundColor: '#03a2c6',
            pointBorderColor: '#03a2c6',
            pointHoverBackgroundColor: '#03a2c6',
          },
          {
            data: this.medias,
            borderColor: '#f2b160',
            pointBackgroundColor: 'white',
            pointBorderWidth: 3,
            pointHoverBorderWidth: 3,
            pointBorderColor: '#f2b160',
          },
        ],
      },
      options: {
        animation: {},
        elements: {
          line: {
            tension: 0,
            fill: false,
          },
          point: {
            radius: 5,
            hoverRadius: 5,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: this.suggestedMax,
            ticks: {
              callback: (value) => {
                return this.isPercentage
                  ? Math.floor(+value) + '%'
                  : Math.floor(+value * 100) / 100;
              },
            },
            // grid: {
            //   drawBorder: false,
            // },
          },
          x: {
            grid: {
              /// offset: true,
              display: false,
            },
          },
        },
      },
    });
  }
}
