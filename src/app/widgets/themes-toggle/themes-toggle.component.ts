import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Theme, ThemeService } from 'app/shared/services/theme.service';

@UntilDestroy()
@Component({
  selector: 'app-themes-toggle',
  templateUrl: './themes-toggle.component.html',
  styleUrls: ['./themes-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemesToggleComponent implements OnInit {
  readonly themeCheckbox: FormControl = new FormControl(false);

  constructor(private readonly _themeService: ThemeService) {
    this.themeCheckbox.setValue(this._themeService.getTheme() === Theme.Dark);
  }

  ngOnInit() {
    this.themeCheckbox.valueChanges.pipe(untilDestroyed(this)).subscribe((): void => {
      this._themeService.changeTheme();
    });
  }
}
