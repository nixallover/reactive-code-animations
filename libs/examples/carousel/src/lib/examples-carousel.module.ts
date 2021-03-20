import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

export const examplesCarouselRoutes: Route[] = [
  { path: '', component: CarouselComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(examplesCarouselRoutes)],
  declarations: [CarouselComponent],
})
export class ExamplesCarouselModule {}
