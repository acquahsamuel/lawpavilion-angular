import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  model: any = {};
  isAuthenticated = true;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alterService: AlertService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  //formFieldValue
  get formField() { return this.loginForm.controls; }

  // onSubmit()
  onSubmit() {
    this.submitted = true;
    this.alterService.clear();

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.formField.username.value, this.formField.password.value)
      .pipe(first()).subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParamMap['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alterService.error(error);
          this.loading = false;
        }
      })
  }



}
