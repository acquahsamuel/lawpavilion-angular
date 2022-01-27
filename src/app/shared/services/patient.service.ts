import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../dto/patient-details';

const BASE_URL = 'https://my-json-server.typicode.com/acquahsamuel/json-db/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }

  getAllPatients() {
    return this.http.get<Patient[]>(BASE_URL);
  }

  createPatient(patient: Patient) {
    return this.http.post<Patient>(BASE_URL, patient);
  }

  updatePatient(patient: Patient) {
    return this.http.put<Patient>(`${BASE_URL}/${patient.id}`, patient);
  }

  deletePatient(id: number) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
