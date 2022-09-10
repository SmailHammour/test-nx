import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export function fadeAnimation(duration: string): AnimationTriggerMetadata {
  return trigger('fade', [
    transition(':enter', [
      style({
        opacity: 0.1,
      }),
      animate(
        `${duration} ease`,
        style({
          opacity: 1,
        })
      ),
    ]),
  ]);
}
