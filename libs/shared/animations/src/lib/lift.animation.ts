import { animation, style, animate } from '@angular/animations';

export const liftInAnimation = animation(
  [
    style({ opacity: '{{ start }}', transform: 'translate({{ startPos }})' }),
    animate(
      '{{ time }}',
      style({ opacity: '{{ end }}', transform: 'translate({{ endPos }})' })
    ),
  ],
  {
    params: {
      time: '500ms ease-out',
      start: 0,
      end: 1,
      startPos: '0, 100px',
      endPos: '0, 0',
    },
  }
);

export const liftOutAnimation = animation(
  [
    style({ opacity: '{{ start }}', transform: 'translate({{ startPos }})' }),
    animate(
      '{{ time }}',
      style({ opacity: '{{ end }}', transform: 'translate({{ endPos }})' })
    ),
  ],
  {
    params: {
      time: '500ms ease-in',
      start: 1,
      end: 0,
      startPos: '0, 0',
      endPos: '0, -100px',
    },
  }
);
