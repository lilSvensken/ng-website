import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('../pages/not-auth/not-auth.module').then((m) => m.NotAuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
