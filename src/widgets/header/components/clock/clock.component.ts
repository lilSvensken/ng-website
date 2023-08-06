import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PopupName, PopupsService } from 'app/services/popups.service';

enum ClockType {
  Simple = 'Простой',
  Drum = 'Барабан',
  Mechanical = 'Механические',
}

enum ClockSize {
  Big = 'Большой',
  Middle = 'Средний',
  Small = 'Маленький',
}

@UntilDestroy()
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  form = new FormGroup({
    type: new FormControl<ClockType>(ClockType.Simple),
    size: new FormControl<ClockSize>(ClockSize.Middle),
  });
  readonly PopupName = PopupName;
  readonly ClockType = ClockType;
  readonly ClockSize = ClockSize;

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
