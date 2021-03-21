import { transition, trigger, useAnimation } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { dropInAnimation, fadeOutAnimation } from '@rca/shared/animations';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarouselState } from '../carousel/carousel.utils';

@Component({
  selector: 'rca-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  animations: [
    trigger('fadeToCenter1', [
      transition(':enter', [
        useAnimation(dropInAnimation, {
          params: {
            startPos: '-20px, -20px',
            time: '500ms 600ms ease-out',
          },
        }),
      ]),
      transition(':leave', [useAnimation(fadeOutAnimation)]),
    ]),
    trigger('fadeToCenter2', [
      transition(':enter', [
        useAnimation(dropInAnimation, {
          params: {
            startPos: '20px, 20px',
            time: '500ms 800ms ease-out',
          },
        }),
      ]),
      transition(':leave', [useAnimation(fadeOutAnimation)]),
    ]),
    trigger('fadeToCenter3', [
      transition(':enter', [
        useAnimation(dropInAnimation, {
          params: {
            startPos: '20px, -20px',
            time: '500ms 1000ms ease-out',
          },
        }),
      ]),
      transition(':leave', [useAnimation(fadeOutAnimation)]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselItemComponent {
  @Input() state: CarouselState;
  @Input() activeState: CarouselState;
}
