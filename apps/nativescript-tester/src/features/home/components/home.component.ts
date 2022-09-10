import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../../fade.animation';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('fade', [
      // ...
      state(
        'void => *',
        style({
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        '* => void',
        style({
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
      transition('* => void', [animate('1s')]),
      transition('void => *', [animate('0.5s')]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  canShowContent = false;

  ngOnInit() {
    setTimeout(() => {
      this.canShowContent = true;
    }, 2000);
  }
}
