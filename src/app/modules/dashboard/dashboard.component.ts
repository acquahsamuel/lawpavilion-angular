import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    // private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  title = '';
  username = 'username';
  userProfile = './assets/images/placeholder.png';
  isLoading = false;

  user = {
    firstname: "Samuel",
    profile_pic: '../images'
  }

  logout() {
    this.router.navigateByUrl('/login')
  }
}


