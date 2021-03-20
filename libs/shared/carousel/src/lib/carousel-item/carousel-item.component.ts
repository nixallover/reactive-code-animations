import { transition, trigger, useAnimation } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { fadeInAnimation, fadeOutAnimation } from '@rca/shared/animations';

@Component({
  selector: 'rca-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  animations: [
    trigger('fadeFromBack', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            time: '500ms 600ms ease-out',
          },
        }),
      ]),
      transition(':leave', [useAnimation(fadeOutAnimation)]),
    ]),
    trigger('fadeFromBack2', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            time: '500ms 800ms ease-out',
          },
        }),
      ]),
      transition(':leave', [useAnimation(fadeOutAnimation)]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselItemComponent {
  @Input() itemIsVisible = false;

  constructor(private readonly cd: ChangeDetectorRef) {}

  updateVisibility(isVisible: boolean) {
    this.itemIsVisible = isVisible;
    this.cd.detectChanges();
  }
}
