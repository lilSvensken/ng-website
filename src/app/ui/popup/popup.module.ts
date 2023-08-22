import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup.component';

@NgModule({
  declarations: [PopupComponent],
  exports: [PopupComponent],
  imports: [CommonModule, FormsModule],
})
export class PopupModule {}
