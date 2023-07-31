import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthPartComponent } from './not-auth-part.component';

const routes: Routes = [
  {
    path: '',
    component: NotAuthPartComponent,
    children: [],
  },
];

@NgModule({
  declarations: [NotAuthPartComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NotAuthPartModule {}
