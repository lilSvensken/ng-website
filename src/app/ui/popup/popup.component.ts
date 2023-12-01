import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopupsService } from 'app/shared/services/popups.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// TODO добавить закрытие по клику на window

@UntilDestroy()
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent {
  @Input() name: string;

  private readonly _isShow$ = new BehaviorSubject<boolean>(false);
  readonly isShow$ = this._isShow$.asObservable();

  constructor(private readonly _popupsService: PopupsService) {
    _popupsService.popupsStatuses$.pipe(untilDestroyed(this)).subscribe((value) => {
      const isOpen = value[this.name]?.isOpen;
      if (isOpen !== this._isShow$.value) {
        this._isShow$.next(isOpen);
      }
    });
  }
}
