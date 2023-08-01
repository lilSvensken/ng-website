import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Theme, ThemeService } from '../../services/theme.service';
import { BehaviorSubject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  private readonly _imgPath$ = new BehaviorSubject(undefined);
  readonly imgPath$ = this._imgPath$.asObservable();
  test = false;

  constructor(readonly themeService: ThemeService) {
    themeService.theme$.pipe(untilDestroyed(this)).subscribe((theme) => {
      console.log(theme);
    });
  }

  protected readonly Theme = Theme;
}
