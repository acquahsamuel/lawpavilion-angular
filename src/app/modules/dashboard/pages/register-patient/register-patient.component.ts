import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, NgForm, FormGroupDirective, FormGroup, Validators, FormBuilder, Form } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}


@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})

export class RegisterPatientComponent implements OnInit {
  loading = false;
  isLinear = false;
  submitted = false;
  postJobForm: FormGroup;


  patientdetails: FormGroup;
  other: FormGroup;
  nextOfKin: FormGroup;
  hmo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.postJobForm = this.formBuilder.group({
      position: ['', Validators.required],
      category: [''],
    })
  }

  get formField() { return this.postJobForm.controls }


  onSubmit() {  }


}
