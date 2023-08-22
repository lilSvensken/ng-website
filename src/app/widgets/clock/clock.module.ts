import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioModule } from 'app/ui/radio/radio.module';
import { PopupModule } from 'app/ui/popup/popup.module';
import { ClockComponent } from './clock.component';
import { SimpleClockComponent } from './components/simple-clock/simple-clock.component';
import { DrumClockComponent } from './components/drum-clock/drum-clock.component';

@NgModule({
  declarations: [ClockComponent, SimpleClockComponent, DrumClockComponent],
  imports: [CommonModule, NgOptimizedImage, RadioModule, ReactiveFormsModule, PopupModule],
  exports: [ClockComponent],
})
export class ClockModule {}
