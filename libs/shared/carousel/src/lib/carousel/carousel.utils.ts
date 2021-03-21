import { merge, Observable, Observer } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';

export const CAROUSEL_STATES = ['first', 'second', 'third'] as const;

export type CarouselState = typeof CAROUSEL_STATES[number];

export interface ActiveCarouselItemParams {
  firstButtonClicks: Observable<void>;
  secondButtonClicks: Observable<void>;
  thirdButtonClicks: Observable<void>;
  initialState: CarouselState;
}

export function activeCarouselState({
  firstButtonClicks,
  secondButtonClicks,
  thirdButtonClicks,
  initialState,
}: ActiveCarouselItemParams): Observable<CarouselState> {
  return merge(
    firstButtonClicks.pipe(map(() => 'first' as const)),
    secondButtonClicks.pipe(map(() => 'second' as const)),
    thirdButtonClicks.pipe(map(() => 'third' as const))
  ).pipe(startWith(initialState), shareReplay(1));
}

export function createReactiveCarouselMachine(
  initialState: CarouselState = 'first'
): {
  observers: Record<CarouselState, Observer<void>>;
  params: ActiveCarouselItemParams;
} {
  const observers: Record<CarouselState, Observer<void>> = {
    first: null,
    second: null,
    third: null,
  };
  const params: ActiveCarouselItemParams = {
    firstButtonClicks: new Observable<void>(
      (observer) => (observers.first = observer)
    ),
    secondButtonClicks: new Observable(
      (observer) => (observers.second = observer)
    ),
    thirdButtonClicks: new Observable(
      (observer) => (observers.third = observer)
    ),
    initialState,
  };
  return { observers, params };
}
