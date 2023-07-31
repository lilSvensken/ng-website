import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthLayoutComponent } from './not-auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: NotAuthLayoutComponent,
    children: [],
  },
];

@NgModule({
  declarations: [NotAuthLayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NotAuthLayoutModule {}
