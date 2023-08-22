import { Component } from '@angular/core';

@Component({
  selector: 'app-drum-clock',
  templateUrl: './drum-clock.component.html',
  styleUrls: ['./drum-clock.component.scss'],
})
export class DrumClockComponent {
  d = new Date();

  constructor() {
    console.log(this.d.toLocaleTimeString());
  }
}
