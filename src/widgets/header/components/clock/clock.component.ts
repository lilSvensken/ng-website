import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PopupName, PopupsService } from 'app/services/popups.service';

@UntilDestroy()
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  form = new FormGroup({
    type: new FormControl<string[]>(['simple']),
  });

  constructor(private readonly _popupsService: PopupsService) {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      console.log(value.type);
    });
  }

  public changeShowSettings(): void {
    const isOpenCurrent = this._popupsService.isOpenPopup(PopupName.Clock);
    this._popupsService.changeStatusPopup(PopupName.Clock, !isOpenCurrent);
  }
}
