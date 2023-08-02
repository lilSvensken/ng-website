import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

export enum ClockType {
  Simple = 'simple',
  Drum = 'drum',
  Mechanical = 'mechanical',
}

@UntilDestroy()
@Component({
  selector: 'app-settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.scss'],
})
export class SettingsPanelComponent {
  form = new FormGroup({
    type: new FormControl<string[]>(['simple']),
  });

  constructor() {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      console.log(value);
    });
  }
}
