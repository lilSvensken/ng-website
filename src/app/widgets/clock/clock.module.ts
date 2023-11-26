import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioModule } from 'app/ui/radio/radio.module';
import { PopupModule } from 'app/ui/popup/popup.module';
import { ClockComponent } from './clock.component';
import { SimpleClockComponent } from './components/simple-clock/simple-clock.component';
import { DrumClockComponent } from './components/drum-clock/drum-clock.component';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { MechanicalClockComponent } from './components/mechanical-clock/mechanical-clock.component';
import { TransformForSecondModule } from 'app/shared/directives/transform-for-second/transform-for-second.module';

@NgModule({
  declarations: [
    ClockComponent,
    SimpleClockComponent,
    DrumClockComponent,
    SettingsPanelComponent,
    MechanicalClockComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RadioModule,
    ReactiveFormsModule,
    PopupModule,
    TransformForSecondModule,
  ],
  exports: [ClockComponent],
})
export class ClockModule {}
