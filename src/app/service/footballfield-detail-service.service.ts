import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballfieldDetailServiceService {

  url: string = "http://localhost:8080/api/v1/football_field";

  constructor(private http: HttpClient) {
  }

  getFootFieldById(id: number, star: any): any {
    const params = new HttpParams().set('star', star);
    return this.http.get(`${this.url}/${id}`, { params });
  }

  // expirationTime() {
  //   return this.http.get(this.url + "/checkTimeExpiration")
  // }

}
