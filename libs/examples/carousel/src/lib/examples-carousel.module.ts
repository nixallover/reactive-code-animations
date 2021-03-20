import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedCarouselModule } from '@rca/shared/carousel';

export const examplesCarouselRoutes: Route[] = [
  { path: '', component: CarouselComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(examplesCarouselRoutes),
    SharedCarouselModule,
  ],
  declarations: [CarouselComponent],
})
export class ExamplesCarouselModule {}
