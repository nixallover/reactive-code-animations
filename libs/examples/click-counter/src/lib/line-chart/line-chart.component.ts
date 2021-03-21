import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
import { ChartData, convertToFormattedData } from '../chart-data.function';

@Component({
  selector: 'reactive-code-animations-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, OnChanges {
  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  @Input() data: ChartData;
  chart;
  config;
  initialized = false;

  ngOnInit(): void {
    this.config = {
      data: {
        datasets: [
          {
            label: 'One Second',
            data: this.data.oneSecond.map(convertToFormattedData),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: Chart.helpers
              .color('rgb(255, 99, 132)')
              .alpha(0.2)
              .rgbString(),
            showLine: true,
            lineWidth: 5,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
          {
            label: 'Five Seconds',
            data: this.data.fiveSeconds.map(convertToFormattedData),
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: Chart.helpers
              .color('rgb(54, 162, 235)')
              .alpha(0.2)
              .rgbString(),
            showLine: true,
            lineWidth: 5,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
          {
            label: 'Fifteen Seconds',
            data: this.data.fifteenSeconds.map(convertToFormattedData),
            borderColor: 'rgb(255, 159, 64)',
            backgroundColor: Chart.helpers
              .color('rgb(255, 159, 64)')
              .alpha(0.2)
              .rgbString(),
            showLine: true,
            lineWidth: 5,
            pointRadius: 0,
            pointHoverRadius: 0,
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true,
              },
            },
          },
        ],
      },
      type: 'scatter',
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true,
          },
        },
        responsive: false,
        title: {
          display: true,
          text: 'Clicks Per Sliding Window',
        },
        // tooltips: {
        //   mode: 'nearest',
        //   intersect: false,
        // },
        // hover: {
        //   mode: 'nearest',
        //   intersect: true,
        // },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Time Elapsed',
              },
              ticks: {
                min: 0,
                max: 1,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Clicks Per Window',
              },
              ticks: {
                min: 0,
                max: 1,
              },
            },
          ],
        },
      },
    };
    const ctx = (document.getElementById(
      'chart'
    ) as HTMLCanvasElement).getContext('2d');
    this.chart = new Chart(ctx, this.config);
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.initialized) {
      return;
    }
    if (changes.data) {
      for (const property of [
        'oneSecond',
        'fiveSeconds',
        'fifteenSeconds',
      ] as const) {
        const lastValueOfCurrent =
          changes.data.currentValue[property][
            changes.data.currentValue[property].length - 1
          ];
        const lastValueOfPrevious =
          changes.data.previousValue[property][
            changes.data.previousValue[property].length - 1
          ];
        if (
          lastValueOfCurrent.clicksPerWindow !==
          lastValueOfPrevious.clicksPerWindow
        ) {
          const index =
            property === 'oneSecond' ? 0 : property === 'fiveSeconds' ? 1 : 2;
          this.config.data.datasets[index].data.push(
            convertToFormattedData(lastValueOfCurrent)
          );
          this.config.options.scales.xAxes[0].ticks.max =
            lastValueOfCurrent.timeElapsed / 1000;
          if (
            property === 'fifteenSeconds' &&
            lastValueOfCurrent.clicksPerWindow >
              this.config.options.scales.yAxes[0].ticks.max
          ) {
            this.config.options.scales.yAxes[0].ticks.max =
              lastValueOfCurrent.clicksPerWindow;
          }
          this.chart.update();
        }
      }
    }
  }
}
