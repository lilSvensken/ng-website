import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemesToggleComponent } from './themes-toggle.component';

@NgModule({
  declarations: [ThemesToggleComponent],
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  exports: [ThemesToggleComponent],
})
export class ThemesToggleModule {}
