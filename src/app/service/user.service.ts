import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:8080/api/v1/users'
  public urlGetImage: string = 'http://localhost:8080/images/'
  constructor(private http: HttpClient) { }

  getImage(imageName: String) {

    return `${this.urlGetImage}user-images/${imageName}`;
  }

  putUser(objUpdate: any) {

    return this.http.put(this.url, objUpdate);
  }

  postReview(objReview: any) {
    return this.http.post(`${this.url}/review`, objReview);
  }

  getAllUser(filter: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(filter).forEach(key => {
      if (filter[key] !== null && filter[key] !== undefined) {
        params = params.set(key, filter[key]); // Thêm từng cặp key-value vào HttpParams
      }
    });
    return this.http.get(this.url, { params });
  }

  postCreateUser(objUser: any): Observable<any> {
    return this.http.post(this.url, objUser);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }

  getUserById(id: number): Observable<any> {
    return this.http.get((`${this.url}/${id}`))
  }
}
