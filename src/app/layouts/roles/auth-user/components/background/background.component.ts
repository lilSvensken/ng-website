import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Theme, ThemeService } from 'app/shared/services/theme.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {
  protected readonly Theme = Theme;

  constructor(readonly themeService: ThemeService) {}
}
