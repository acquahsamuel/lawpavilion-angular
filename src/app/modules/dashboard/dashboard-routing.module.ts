import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RegisterPatientComponent } from './pages/register-patient/register-patient.component';
import { PatentListComponent } from './pages/patent-list/patent-list.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: "register-patient", component: RegisterPatientComponent },
      { path: "patient-details", component: PatentListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
