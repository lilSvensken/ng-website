import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-drum-clock',
  templateUrl: './drum-clock.component.html',
  styleUrls: ['./drum-clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrumClockComponent {
  d = new Date();

  constructor() {
    console.log(this.d.toLocaleTimeString());
  }
}
