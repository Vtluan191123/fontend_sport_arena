import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  url: string = "http://localhost:8080/api/v1/football_field";

  constructor(private http: HttpClient) {
  }

  getAllFootField(filter: any): any {

    let params = new HttpParams();
    Object.keys(filter).forEach(key => {
      if (filter[key] !== null && filter[key] !== undefined) {
        params = params.set(key, filter[key]); // Thêm từng cặp key-value vào HttpParams
      }
    });

    return this.http.get(this.url, { params });
  }


}
