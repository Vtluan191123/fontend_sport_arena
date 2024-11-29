import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  url: string = "http://localhost:8080/api/v1/football_field";

  constructor(private http: HttpClient) {
  }

  getAllFootField(page: number): any {

    const params = new HttpParams().set('page', page.toString())
    return this.http.get(this.url, { params });
  }


}
