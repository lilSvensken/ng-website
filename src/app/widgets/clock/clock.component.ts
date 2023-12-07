import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PopupName, PopupsService } from 'app/shared/services/popups.service';
import { ClockSize, ClockType } from './utils/enums';
import { MyCookiesService } from 'app/shared/services/my-cookies.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

const COOKIE_NAME = 'clockSettings';

@UntilDestroy()
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent implements OnInit {
  form = new FormGroup({
    type: new FormControl<ClockType>(ClockType.Simple),
    size: new FormControl<ClockSize>(ClockSize.Middle),
  });
  readonly ClockType = ClockType;

  constructor(
    private readonly _popupsService: PopupsService,
    private _myCookiesService: MyCookiesService,
  ) {}

  public changeShowSettings(): void {
    const isOpenCurrent = this._popupsService.isOpenPopup(PopupName.Clock);
    this._popupsService.changeStatusPopup(PopupName.Clock, !isOpenCurrent);
  }

  ngOnInit(): void {
    const defaultForm = this._myCookiesService.get(COOKIE_NAME);
    if (defaultForm) this.form.setValue(defaultForm);

    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      this._myCookiesService.put(COOKIE_NAME, value);
    });
  }
}
