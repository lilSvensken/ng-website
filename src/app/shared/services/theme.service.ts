import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme$ = new BehaviorSubject<Theme>(Theme.Dark);
  readonly theme$ = this._theme$.asObservable();

  getTheme(): Theme {
    return this._theme$.value;
  }

  changeTheme(): void {
    const isDarkTheme: boolean = this.getTheme() === Theme.Dark;
    this._theme$.next(isDarkTheme ? Theme.Light : Theme.Dark);
  }
}
