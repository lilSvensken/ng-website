import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserComponent } from './auth-user.component';

const routes: Routes = [
  {
    path: '',
    component: AuthUserComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('app/pages/main-page/main-page.module').then((m) => m.MainPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthUserRoutingModule {}
