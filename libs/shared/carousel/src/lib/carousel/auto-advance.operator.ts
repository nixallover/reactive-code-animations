import { interval, merge, Observable, of } from 'rxjs';
import { scan, switchMap } from 'rxjs/operators';

export function autoAdvance<T>(
  period: number,
  nextState: (currentState: T) => T
) {
  return function (incoming: Observable<T>): Observable<T> {
    return incoming.pipe(
      switchMap((currentState) =>
        merge(
          of(currentState),
          interval(period).pipe(scan((acc) => nextState(acc), currentState))
        )
      )
    );
  };
}
