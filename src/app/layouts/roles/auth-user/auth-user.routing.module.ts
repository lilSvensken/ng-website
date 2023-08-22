import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserComponent } from './auth-user.component';

const routes: Routes = [
  {
    path: '',
    component: AuthUserComponent,
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('app/pages/main-page/main-page.component').then((m) => m.MainPageComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AuthUserRoutingModule {}
