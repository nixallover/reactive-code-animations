import { Component } from '@angular/core';
import {
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
  activeState$ = this._reactiveMachine.activeState$;

  userClick(state: CarouselState) {
    this._reactiveMachine.userInitiatedStateChange(state);
  }
}
