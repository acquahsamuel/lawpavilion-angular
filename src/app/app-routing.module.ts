import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/user-auth/user-auth-routing.module')
        .then((m) => m.UserAuthRoutingModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import('./modules/dashboard/dashboard-routing.module')
      .then((m) => m.DashboardRoutingModule)
  },
  {
    path: '**', redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
