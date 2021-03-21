import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ClickCounterComponent }]),
  ],
  declarations: [ClickCounterComponent, LineChartComponent],
})
export class ExamplesClickCounterModule {}
