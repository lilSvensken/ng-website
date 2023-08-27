import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimeService } from 'app/shared/services/time.service';

@Component({
  selector: 'app-mechanical-clock',
  templateUrl: './mechanical-clock.component.html',
  styleUrls: ['./mechanical-clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MechanicalClockComponent {
  constructor(readonly dateAndTimeService: TimeService) {}
}
