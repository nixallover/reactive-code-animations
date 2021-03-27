import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ImperativeClickCounterComponent } from './imperative-click-counter/imperative-click-counter.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ClickCounterComponent },
      { path: 'imperative', component: ImperativeClickCounterComponent },
    ]),
  ],
  declarations: [
    ClickCounterComponent,
    LineChartComponent,
    ImperativeClickCounterComponent,
  ],
})
export class ExamplesClickCounterModule {}
