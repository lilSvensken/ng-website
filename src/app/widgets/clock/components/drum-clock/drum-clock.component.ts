import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimeService } from 'app/shared/services/time.service';
import { getRange } from 'app/shared/functions/getRange';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { ClockSize } from '../../utils/enums';

interface TimeDrum {
  hoursFirst: number;
  hoursLast: number;
  minutesFirst: number;
  minutesLast: number;
  secondsFirst: number;
  secondsLast: number;
}

@UntilDestroy()
@Component({
  selector: 'app-drum-clock',
  templateUrl: './drum-clock.component.html',
  styleUrls: ['./drum-clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrumClockComponent {
  @Input() size: ClockSize;

  private readonly _timeModel$ = new BehaviorSubject<TimeDrum | undefined>(undefined);
  public readonly timeModel$ = this._timeModel$.asObservable();

  constructor(readonly dateAndTimeService: TimeService) {
    this.dateAndTimeService.time$.pipe(untilDestroyed(this)).subscribe((time) => {
      this._timeModel$.next({
        hoursFirst: Math.floor(time.Hr / 10),
        hoursLast: time.Hr,
        minutesFirst: Math.floor(time.Min / 10),
        minutesLast: time.Min,
        secondsFirst: Math.floor(time.Sec / 10),
        secondsLast: time.Sec,
      });
    });
  }

  protected readonly getRange = getRange;

  getTransformStyle(value: number) {
    return `rotateY(90deg) rotate(${value * 36}deg)`;
  }
}
