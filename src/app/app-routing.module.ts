import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('app/app-parts/auth-part/auth-part.module').then((m) => m.AuthPartModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('app/app-parts/not-auth-part/not-auth-part.module').then((m) => m.NotAuthPartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
