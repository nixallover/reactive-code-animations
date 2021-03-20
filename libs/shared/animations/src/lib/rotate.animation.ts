import { animation, style, animate } from '@angular/animations';

export const rotateInAnimation = animation(
  [
    style({
      opacity: '{{ start }}',
      transform: 'translate({{ startPos }}) rotate({{startRotation}})',
    }),
    animate(
      '{{ time }}',
      style({
        opacity: '{{ end }}',
        transform: 'translate({{ endPos }}) rotate({{endRotation}})',
      })
    ),
  ],
  {
    params: {
      time: '500ms ease-out',
      start: 0,
      end: 1,
      startPos: '0, -100px',
      endPos: '0, 0',
      startRotation: '-15deg',
      endRotation: '0',
    },
  }
);

export const rotateOutAnimation = animation(
  [
    style({
      opacity: '{{ start }}',
      transform: 'translate({{ startPos }}) rotate({{startRotation}})',
    }),
    animate(
      '{{ time }}',
      style({
        opacity: '{{ end }}',
        transform: 'translate({{ endPos }}) rotate({{endRotation}})',
      })
    ),
  ],
  {
    params: {
      time: '500ms ease-in',
      start: 1,
      end: 0,
      startPos: '0, 0',
      endPos: '0, 100px',
      startRotation: '0',
      endRotation: '15deg',
    },
  }
);
