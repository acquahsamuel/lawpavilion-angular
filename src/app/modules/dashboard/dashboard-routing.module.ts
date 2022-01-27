import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PostJobComponent } from './pages/register-patient/post-job.component';
import { ProfileComponent } from './pages/patient-list/profile.component';
import { YourPostsComponent } from './pages/your-posts/your-posts.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
// import { LoginComponent } from '../user-auth/pages/login/login.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: "post-job", component: PostJobComponent },
      { path: "your-posts", component: YourPostsComponent },
      { path: "profile", component: ProfileComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
