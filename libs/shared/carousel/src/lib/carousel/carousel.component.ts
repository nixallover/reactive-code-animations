import { Component } from '@angular/core';
import {
  activeCarouselState,
  CarouselState,
  CAROUSEL_STATES,
  createReactiveCarouselMachine,
} from './carousel.utils';

let _id = 0;
@Component({
  selector: 'rca-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  carouselId = `rca-carousel-${_id++}`;
  states = CAROUSEL_STATES;
  private _reactiveMachine = createReactiveCarouselMachine();
  activeState$ = activeCarouselState(this._reactiveMachine.params);

  userClick(state: CarouselState) {
    this._reactiveMachine.observers[state].next();
  }
}
