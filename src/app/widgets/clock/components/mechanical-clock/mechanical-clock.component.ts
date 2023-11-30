import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimeService } from 'app/shared/services/time.service';
import { getRange } from 'app/shared/functions/getRange';

@Component({
  selector: 'app-mechanical-clock',
  templateUrl: './mechanical-clock.component.html',
  styleUrls: ['./mechanical-clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MechanicalClockComponent {
  constructor(readonly dateAndTimeService: TimeService) {}

  public getRange(start: number, end: number) {
    return getRange(start, end);
  }

  public getTransformStyle(division: number) {
    return `rotate(${division * 6}deg)`;
  }

  public getTransformHrStyle(hr: number, min: number) {
    return this.getTransformStyle(hr * 5 + min / 12);
  }
}
