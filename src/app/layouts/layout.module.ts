import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NgOptimizedImage, RouterOutlet, LayoutRoutingModule],
  exports: [],
})
export class LayoutModule {}
