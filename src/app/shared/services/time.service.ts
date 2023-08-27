import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HR_IN_DAY, MIN_IN_HR, SEC_IN_MIN } from 'app/shared/consts/time';

export interface Time {
  Sec: number;
  Min: number;
  Hr: number;
}

@Injectable({ providedIn: 'root' })
export class TimeService {
  private readonly _time$ = new BehaviorSubject<Time>({ Sec: 0, Min: 0, Hr: 0 });
  readonly time$ = this._time$.asObservable();

  private readonly _fullDate$ = new BehaviorSubject<Date>(new Date());
  readonly fullDate$ = this._fullDate$.asObservable();

  constructor() {
    this.updateTime();
  }

  updateTime(): void {
    this._fullDate$.next(new Date());
    if (!this._time$.value.Sec) {
      const currentDate = new Date();
      this._time$.next({
        Sec: currentDate.getSeconds(),
        Min: currentDate.getMinutes(),
        Hr: currentDate.getHours(),
      });
    } else {
      this._time$.next(getNewTime(this._time$.value));
    }

    setTimeout(() => {
      this.updateTime();
    }, 1000);
  }
}

function getNewTime(oldTime: Time): Time {
  const newTime: Time = { ...oldTime };
  newTime.Sec = newTime.Sec < SEC_IN_MIN - 1 ? newTime.Sec + 1 : 0;
  if (newTime.Sec === 0) {
    newTime.Min = newTime.Min < MIN_IN_HR - 1 ? newTime.Min + 1 : 0;
  }
  if (newTime.Min === 0) {
    newTime.Hr = newTime.Hr < HR_IN_DAY - 1 ? newTime.Hr + 1 : 0;
  }

  return newTime;
}
