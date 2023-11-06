import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User, UserAuth } from '../models/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: BehaviorSubject<User | undefined> = new BehaviorSubject<
    User | undefined
  >(JSON.parse(localStorage.getItem('user') ?? JSON.stringify('')));

  private apiUrl: string = environment.api;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  registerUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/Usuario/Register`, user);
  }
  loginUser(user: UserAuth): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/Usuario/Login`, user);
  }
  getUser(): Observable<User | undefined> {
    return this.user.asObservable();
  }

  login(user: User): void {
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.cookieService.set('Token', user.token);
    this.router.navigate(['/']);
  }
  logout(): void {
    this.user.next(undefined);
    this.cookieService.deleteAll();
    localStorage.clear();
  }
}
