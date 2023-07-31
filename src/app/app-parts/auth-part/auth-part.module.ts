import { NgModule } from '@angular/core';

import { AuthPartComponent } from './auth-part.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'widgets/header/header.component';
import { TaskbarComponent } from 'widgets/taskbar/taskbar.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPartComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('pages/main-page/main-page.module').then((m) => m.MainPageModule),
      },
    ],
  },
];

@NgModule({
  declarations: [AuthPartComponent, HeaderComponent, TaskbarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [HeaderComponent],
})
export class AuthPartModule {}
