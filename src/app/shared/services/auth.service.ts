import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../dto/user.dto';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_REGISTER_URL = 'https://protech-devcamper-api.herokuapp.com/api/v1/auth/register';
  BASE_LOGIN_URL = 'https://protech-devcamper-api.herokuapp.com/api/v1/auth/login';
  
  // MODEL = 'reister'

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  // Interface usage  : 
  public get userValue(): User {
    return this.userSubject.value;
  }


  public register(user: any) {
    return this.http.post(`${this.BASE_REGISTER_URL}`, user);
  }

  public login(username, password) {
    return this.http.post<User>(`${this.BASE_LOGIN_URL}`, { username, password })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }


  public forgotPassword(email: string) {
    return this.http.post(`${environment.apiUrl}/auth/forgotpassword`, email)
  }

  public updateDetails(id, params) {
    return this.http.put(`${environment.apiUrl}/updatedetails`, {})
  }


  public logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

}
