import {
  query,
  stagger,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component } from '@angular/core';
import { fadeInAnimation, fadeOutAnimation } from '@rca/shared/animations';
import { BehaviorSubject, timer } from 'rxjs';

@Component({
  selector: 'rca-series-example',
  templateUrl: './series-example.component.html',
  styleUrls: ['./series-example.component.scss'],
  animations: [
    trigger('rotateInStaggeredAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(100, [useAnimation(fadeInAnimation)]),
          ],
          {
            optional: true,
          }
        ),
        query(':leave', [stagger(0, [useAnimation(fadeOutAnimation)])], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class SeriesExampleComponent {
  items = ['a', 'b', 'c', 'd'];
  items$ = new BehaviorSubject<Array<string | number>>(this.items);
  isLoading = false;

  trackByFn(index, item) {
    return index;
  }

  loadMore() {
    this.isLoading = true;
    timer(3000).subscribe((x) => {
      this.items$.next([...this.items, 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm']);
      this.isLoading = false;
    });
  }
}
