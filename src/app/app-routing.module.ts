import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthGuard } from './guards/is-auth.guard';
import { IsNotAuthGuard } from './guards/is-not-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('app/layouts/main-layout/main-layout.module').then((m) => m.MainLayoutModule),
    canActivate: [IsAuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('app/layouts/not-auth-layout/not-auth-layout.module').then(
        (m) => m.NotAuthLayoutModule,
      ),
    canActivate: [IsNotAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
