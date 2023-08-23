import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopupName } from 'app/shared/services/popups.service';
import { FormGroup } from '@angular/forms';
import { ClockSize, ClockType } from '../../utils/enums';

@Component({
  selector: 'app-settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPanelComponent {
  @Input() form: FormGroup;

  protected readonly PopupName = PopupName;
  protected readonly ClockType = ClockType;
  protected readonly ClockSize = ClockSize;
}
