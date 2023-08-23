import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from 'app/shared/guards/is-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('app/layouts/roles/auth-user/auth-user.module').then((m) => m.AuthUserModule),
    canActivate: [IsAuthGuard],
  },
  // todo add more routes isNotAuth
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
