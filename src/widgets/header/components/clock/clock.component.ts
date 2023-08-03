import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  private readonly _isShowSettings$ = new BehaviorSubject<boolean>(false);
  readonly isShowSettings$ = this._isShowSettings$.asObservable();

  form = new FormGroup({
    type: new FormControl<string[]>(['simple']),
  });

  constructor() {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      console.log(value.type);
    });
  }

  public changeShowSettings(): void {
    this._isShowSettings$.next(!this._isShowSettings$.value);
  }
}
