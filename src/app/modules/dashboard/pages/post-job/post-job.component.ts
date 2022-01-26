import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, NgForm, FormGroupDirective, FormGroup, Validators, FormBuilder } from '@angular/forms';


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
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})

export class PostJobComponent implements OnInit {
  loading = false;
  submitted = false;
  postJobForm: FormGroup;


  constructor(
    private notification: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.postJobForm = this.formBuilder.group({
      position: ['', Validators.required],
      category: [''],
    })
  }

  get formField() { return this.postJobForm.controls }


  onSubmit() {

  }


}
