import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimeService } from 'app/shared/services/time.service';

@Component({
  selector: 'app-simple-clock',
  templateUrl: './simple-clock.component.html',
  styleUrls: ['./simple-clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleClockComponent {
  constructor(readonly timeService: TimeService) {}
}
