import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimeService } from 'app/shared/services/time.service';
import { ClockSize } from '../../utils/enums';

@Component({
  selector: 'app-simple-clock',
  templateUrl: './simple-clock.component.html',
  styleUrls: ['./simple-clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleClockComponent {
  @Input() size: ClockSize;

  constructor(readonly timeService: TimeService) {}

  formationDate(time: number): string {
    return time > 9 ? String(time) : `0${time}`;
  }
}
