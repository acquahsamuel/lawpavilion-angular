import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/dto/patient-details';

import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patent-list',
  templateUrl: './patent-list.component.html',
  styleUrls: ['./patent-list.component.scss']
})

export class PatentListComponent implements OnInit {
  loading = false;
  dataSource: Patient[];
  displayedColumns: string[] =
    ['profileImage',
      'name',
      'gender',
      'age',
      'phoneNumber',
      'address'];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.loadAllPatient();
  }

  loadAllPatient() {
    this.loading = true;
    this.patientService.getAllPatients().subscribe(patientData => {
      this.dataSource = patientData;
    })
  }
}






