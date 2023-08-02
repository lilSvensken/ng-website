import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  private readonly _isShowSettings$ = new BehaviorSubject<boolean>(false);
  readonly isShowSettings$ = this._isShowSettings$.asObservable();

  public changeShowSettings(): void {
    this._isShowSettings$.next(!this._isShowSettings$.value);
  }
}
