import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PopupName, PopupsService } from 'app/shared/services/popups.service';
import { ClockSize, ClockType } from './utils/enums';

@UntilDestroy()
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent {
  form = new FormGroup({
    type: new FormControl<ClockType>(ClockType.Simple),
    size: new FormControl<ClockSize>(ClockSize.Middle),
  });
  readonly ClockType = ClockType;

  constructor(private readonly _popupsService: PopupsService) {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      console.log(value);
    });
  }

  public changeShowSettings(): void {
    const isOpenCurrent = this._popupsService.isOpenPopup(PopupName.Clock);
    this._popupsService.changeStatusPopup(PopupName.Clock, !isOpenCurrent);
  }
}
