import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface PopupStatus {
  isOpen: boolean;
}

export enum PopupName {
  Clock = 'CLOCK',
}

@Injectable({ providedIn: 'root' })
export class PopupsService {
  private readonly _popupsStatuses$ = new BehaviorSubject<Record<string, PopupStatus>>({});
  readonly popupsStatuses$ = this._popupsStatuses$.asObservable();

  public changeStatusPopup(name: string, isOpen: boolean): void {
    const currentPopup = this._popupsStatuses$.value[name];

    if (!currentPopup || currentPopup.isOpen !== isOpen) {
      this._popupsStatuses$.next({
        ...this._popupsStatuses$.value,
        [name]: { isOpen },
      });
    }
  }

  public isOpenPopup(name: string): boolean {
    return this._popupsStatuses$.value[name]?.isOpen;
  }
}
