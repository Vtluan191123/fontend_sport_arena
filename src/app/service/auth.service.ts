import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080/api/v1/auth";

  loginPost(userLogin: any): Observable<any> {
    return this.http.post(`${this.url}/login`, userLogin, { withCredentials: true });
  }

  getAccount(): Observable<any> {
    return this.http.get(`${this.url}/account`);
  }

  refreshToken(): Observable<any> {
    return this.http.get(`${this.url}/refresh_token`, { withCredentials: true })
  }

  logout(): Observable<any> {
    return this.http.get(`${this.url}/logout`, { withCredentials: true })
  }
}
