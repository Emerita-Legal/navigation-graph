import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ISubMessage } from '../../chat-elements/subMessage';

@Component({
  selector: 'app-circle-chart',
  templateUrl: "./circle-chart.component.html",
  styles: [
    `
      .legend {
        padding-left: 12px;
        border-left: 3px solid lightgray;
      }

      .legend.legend-red {
        border-color: #f27760;
      }

      .legend.legend-blue {
        border-color: #03a2c6;
      }

      .legend.legend-yellow {
        border-color: #f2b160;
      }

      .legend.legend-indigo {
        border-color: #00447b;
      }

      .legend {
        padding-left: 10px;
        font-size: 14px;
      }

      @media (max-width: 364px) {
        .success-rate-donut__details--holder {
          padding-left: 0.5rem;
          padding-right: 0.25rem;
        }
      }

      @media (min-width: 365px) {
        .success-rate-donut__details--holder {
          left: 10px;
        }
      }

      @media (min-width: 400px) {
        .success-rate-donut__details--holder {
          left: 15px;
        }
      }
      number @media (min-width: 992px) {
        .success-rate-donut__details--holder {
          left: 0;
        }
      }
      .graph-half {
        border-right: 2px solid #d8d8d8;
      }
      div.w-50 {
        margin: 0 10px;
      }
      h5 {
        font-size: 16px;
        color: gray
      }
    `,
  ],
})
export class CircleChartComponent implements OnInit, ISubMessage {
  @ViewChild('successRateChart', { static: true }) private chartRef: any;
  chart: any;
  @Input() data!: { value: number; mediaValue: number };

  valueLabel: string = 'Empresa';
  valueColor = 'red';

  valueBgColor: string = '';
  backgroundRestColor = 'lightgray';
  insideDonutColor = '#f2b160';

  ngOnInit() {
    this.initColor();
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [this.data?.value, 100 - this.data?.value],
            backgroundColor: [this.valueBgColor, this.backgroundRestColor],
            hoverBackgroundColor: [this.valueBgColor, this.backgroundRestColor],
            hoverBorderColor: [this.valueBgColor, this.backgroundRestColor],
            borderColor: ['white'],
            borderWidth: 2,
          },
          {
            data: [this.data?.mediaValue, 100 - this.data?.mediaValue],
            backgroundColor: [this.insideDonutColor, this.backgroundRestColor],
            hoverBackgroundColor: [
              this.insideDonutColor,
              this.backgroundRestColor,
            ],
            hoverBorderColor: [this.insideDonutColor, this.backgroundRestColor],
            borderColor: ['white'],
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
        animation: {},
        maintainAspectRatio: true,
      },
    });
  }

  initColor() {
    // switch (this.valueColor) {
    switch ('red') {
      case 'red': {
        this.valueBgColor = '#f27760';
        break;
      }
      //   case 'blue': {
      //     this.valueBgColor = '#03a2c6';
      //     break;
      //   }
      //   case 'indigo': {
      //     this.valueBgColor = '#00447b';
      //     break;
      //   }
      //   default: {
      //     this.valueBgColor = 'lightgray';
      //   }
    }
  }
}
