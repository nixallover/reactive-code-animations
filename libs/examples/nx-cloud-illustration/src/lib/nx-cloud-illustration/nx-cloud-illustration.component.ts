import {
  query,
  stagger,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component } from '@angular/core';
import { dropInAnimation, dropOutAnimation } from './drop.animation';

@Component({
  selector: 'rca-nx-cloud-illustration',
  templateUrl: './nx-cloud-illustration.component.html',
  styleUrls: ['./nx-cloud-illustration.component.scss'],
  animations: [
    trigger('dropInAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(100, [useAnimation(dropInAnimation)]),
          ],
          {
            optional: true,
          }
        ),
        query(':leave', [stagger(100, [useAnimation(dropOutAnimation)])], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class NxCloudIllustrationComponent {
  imageKeys = ['keyboard', 'nx-layer', 'nx-cloud-layer', 'code'];
  illustrationIsVisible = false;
}
