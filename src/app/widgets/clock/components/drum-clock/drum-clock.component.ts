import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimeService } from 'app/shared/services/time.service';

@Component({
  selector: 'app-drum-clock',
  templateUrl: './drum-clock.component.html',
  styleUrls: ['./drum-clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrumClockComponent {
  constructor(readonly dateAndTimeService: TimeService) {}
}
