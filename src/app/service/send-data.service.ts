import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private dataSource = new BehaviorSubject<any>(null); // Tạo một BehaviorSubject để lưu dữ liệu
  currentData: any = this.dataSource.asObservable(); // Cho phép components khác subscribe vào

  constructor() { }

  // Hàm để cập nhật dữ liệu
  updateData(data: any) {
    this.dataSource.next(data);
  }
}


