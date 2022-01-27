import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { YourPostsComponent } from './pages/your-posts/your-posts.component';
import { PostJobComponent } from './pages/register-patient/post-job.component';
import { ProfileComponent } from './pages/patient-list/profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PostJobComponent,
    ProfileComponent,
    YourPostsComponent,
  ],

  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule { }
