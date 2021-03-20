import { animation, style, animate } from '@angular/animations';

export const fadeInAnimation = animation(
  [
    style({ opacity: '{{ start }}', transform: 'scale({{ startScale }})' }),
    animate(
      '{{ time }}',
      style({ opacity: '{{ end }}', transform: 'scale({{ endScale }})' })
    ),
  ],
  {
    params: {
      time: '500ms ease-out',
      start: 0,
      end: 1,
      startScale: 0.9,
      endScale: 1,
    },
  }
);

export const fadeOutAnimation = animation(
  [
    style({ opacity: '{{ start }}', transform: 'scale({{ startScale }})' }),
    animate(
      '{{ time }}',
      style({ opacity: '{{ end }}', transform: 'scale({{ endScale }})' })
    ),
  ],
  {
    params: {
      time: '500ms ease-in',
      start: 1,
      end: 0,
      startScale: 1,
      endScale: 0.9,
    },
  }
);
