import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio.component';
import { DrumClockComponent } from '../../../widgets/header/components/clock/components/drum-clock/drum-clock.component';

@NgModule({
  declarations: [RadioComponent, DrumClockComponent],
  exports: [RadioComponent, DrumClockComponent],
  imports: [CommonModule, FormsModule],
})
export class RadioModule {}
