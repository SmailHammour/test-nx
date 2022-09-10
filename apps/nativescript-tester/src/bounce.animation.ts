import {animate, AnimationTriggerMetadata, style, transition, trigger} from '@angular/animations';

export function bounceAnimation(duration: string): AnimationTriggerMetadata {
  return trigger('bounce', [
    transition(':enter', [
      style({
        transform: 'scale3d(1.08, 1.08)',
        opacity: 0.1
      }),
      animate(
        `${duration} ease`,
        style({
          transform: 'scale3d(1, 1)',
          opacity: 1
        })
      )
    ])
  ]);
}
