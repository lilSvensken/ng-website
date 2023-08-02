import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-clock',
  templateUrl: './simple-clock.component.html',
  styleUrls: ['./simple-clock.component.scss'],
})
export class SimpleClockComponent {
  d = new Date();

  constructor() {
    console.log(this.d.toLocaleTimeString());
  }
}
