import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:8080/api/v1/users'
  public urlGetImage: string = 'http://localhost:8080/images'
  constructor(private http: HttpClient) { }

  getImage(imageName: String) {

    return `${this.urlGetImage}/${imageName}`;
  }
}
