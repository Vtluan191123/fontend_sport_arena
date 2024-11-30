import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballfieldDetailServiceService {

  url: string = "http://localhost:8080/api/v1/football_field";

  constructor(private http: HttpClient) {
  }

  getFootFieldById(id: number): any {
    return this.http.get(this.url + "/" + id);
  }
}
