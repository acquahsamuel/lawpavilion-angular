import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PatentListComponent } from './pages/patent-list/patent-list.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PatentListComponent,
    RegisterPatientComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule { }
