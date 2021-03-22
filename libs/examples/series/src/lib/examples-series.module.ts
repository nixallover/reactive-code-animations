import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SeriesExampleComponent } from './series-example/series-example.component';

export const examplesSeriesRoutes: Route[] = [
  {
    path: '',
    component: SeriesExampleComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(examplesSeriesRoutes)],
  declarations: [SeriesExampleComponent],
})
export class ExamplesSeriesModule {}
