import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-themes-toggle',
  templateUrl: './themes-toggle.component.html',
  styleUrls: ['./themes-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemesToggleComponent {
  constructor() {
    console.log('themesToggleComponent work!');
  }
}
