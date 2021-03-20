import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent, CarouselItemComponent],
  exports: [CarouselComponent, CarouselItemComponent],
})
export class SharedCarouselModule {}
