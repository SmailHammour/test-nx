import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from '../../../fade.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeAnimation('20000ms')],
})
export class HomeComponent implements OnInit {
  canShowContent = false;

  ngOnInit() {
    setTimeout(() => {
      this.canShowContent = true;
    }, 2000);
  }
}
