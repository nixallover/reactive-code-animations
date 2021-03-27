import { Component } from '@angular/core';

@Component({
  selector: 'reactive-code-animations-imperative-click-counter',
  templateUrl: './imperative-click-counter.component.html',
  styleUrls: ['./imperative-click-counter.component.css'],
})
export class ImperativeClickCounterComponent {
  count = 0;

  addOne() {
    this.count++;
  }
}
