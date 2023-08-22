import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from '../shared/guards/is-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('app/layouts/roles/auth-user/auth-user.module').then((m) => m.AuthUserModule),
    canActivate: [IsAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
