import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthComponent } from './not-auth.component';

const routes: Routes = [
  {
    path: '',
    component: NotAuthComponent,
    children: [],
  },
];

@NgModule({
  declarations: [NotAuthComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NotAuthModule {}
