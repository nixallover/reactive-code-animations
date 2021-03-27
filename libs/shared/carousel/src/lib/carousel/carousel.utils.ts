import { merge, Observable, Observer } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { autoAdvance } from './auto-advance.operator';

export const CAROUSEL_STATES = ['spongebob', 'patrick', 'gary'] as const;

export type CarouselState = typeof CAROUSEL_STATES[number];

export interface ReactiveCarouselMachine {
  activeState$: Observable<CarouselState>;
  userInitiatedStateChange: (carouselState: CarouselState) => void;
}

export function createReactiveCarouselMachine(
  timeToAutoAdvance: number = 5000,
  initialState: CarouselState = 'spongebob'
): ReactiveCarouselMachine {
  const observers: Record<CarouselState, Observer<void>> = {
    spongebob: null,
    patrick: null,
    gary: null,
  };
  const userInitiatedActions = CAROUSEL_STATES.reduce((acc, carouselState) => {
    acc[carouselState] = new Observable<void>((observer) => {
      observers[carouselState] = observer;
    });
    return acc;
  }, {} as Record<CarouselState, Observable<void>>);
  const activeState$ = activeCarouselState({
    userInitiatedActions,
    initialState,
    timeToAutoAdvance,
  });
  const userInitiatedStateChange = (carouselState: CarouselState) => {
    observers[carouselState].next();
  };
  return {
    userInitiatedStateChange,
    activeState$,
  };
}

interface ActiveCarouselItemParams {
  userInitiatedActions: Record<CarouselState, Observable<void>>;
  initialState: CarouselState;
  timeToAutoAdvance: number;
}

function activeCarouselState({
  userInitiatedActions,
  initialState,
  timeToAutoAdvance,
}: ActiveCarouselItemParams): Observable<CarouselState> {
  return merge(
    ...Object.entries(
      userInitiatedActions
    ).map(
      ([carouselState, userInitiatedObservable]: [
        CarouselState,
        Observable<void>
      ]) => userInitiatedObservable.pipe(map(() => carouselState))
    )
  ).pipe(
    startWith(initialState),
    autoAdvance(timeToAutoAdvance, nextState),
    shareReplay(1)
  );
}

function nextState(state: CarouselState): CarouselState {
  if (state === 'spongebob') {
    return 'patrick';
  }
  if (state === 'patrick') {
    return 'gary';
  }
  return 'spongebob';
}
