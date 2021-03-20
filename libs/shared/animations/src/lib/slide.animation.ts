import { animation, style, animate } from '@angular/animations';

export const slideInAnimation = animation(
  [
    style({ opacity: '{{ start }}', height: '{{ startHeight }}' }),
    animate(
      '{{ time }}',
      style({ opacity: '{{ end }}', height: '{{ endHeight }}' })
    ),
  ],
  {
    params: {
      time: '500ms ease-out',
      start: 0,
      end: 1,
      startHeight: 0,
      endHeight: '*',
    },
  }
);

export const slideOutAnimation = animation(
  [
    style({ opacity: '{{ start }}', height: '{{ startHeight }}' }),
    animate(
      '{{ time }}',
      style({ opacity: '{{ end }}', height: '{{ endHeight }}' })
    ),
  ],
  {
    params: {
      time: '500ms ease-in',
      start: 1,
      end: 0,
      startHeight: '*',
      endHeight: 0,
    },
  }
);
