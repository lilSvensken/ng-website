import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyCookiesService } from './my-cookies.service';

const COOKIE_NAME = 'theme';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme$ = new BehaviorSubject<Theme>(Theme.Dark);
  readonly theme$ = this._theme$.asObservable();

  constructor(private _myCookiesService: MyCookiesService) {
    const defaultTheme = this._myCookiesService.get(COOKIE_NAME);
    if (defaultTheme) this._theme$.next(defaultTheme);
  }

  getTheme(): Theme {
    return this._theme$.value;
  }

  changeTheme(): void {
    const isDarkTheme: boolean = this.getTheme() === Theme.Dark;
    this._theme$.next(isDarkTheme ? Theme.Light : Theme.Dark);
    this._myCookiesService.put(COOKIE_NAME, this._theme$.value);
  }
}
