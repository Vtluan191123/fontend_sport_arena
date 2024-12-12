import { Component, NgModule, OnInit } from '@angular/core';
import { SendDataService } from '../../../service/send-data.service';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../service/order.service';
import { error } from 'console';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  data: any;
  dataLocal: string = ''

  orderObj: any = {
    "email": 'vtluan1911233@gmail.com',

    "orderDetails": [],
    "date": '',
    "bookerName": '',
    "bookerPhoneNumber": '',
    "bookerMessage": ''
  }
  constructor(private orderService: OrderService, private router: Router) {

  }



  ngOnInit(): void {

    this.fetchCartDetail()

  }



  fetchCartDetail() {
    const dataLocal = localStorage.getItem('list_cart_detail'); // Dữ liệu trả về là chuỗi (string)
    if (dataLocal) {
      this.data = JSON.parse(dataLocal); // Chuyển chuỗi JSON thành đối tượng hoặc mảng
      this.orderObj.orderDetails = this.data.data.resCartDetails;
      this.orderObj.date = this.data.data.day;
      console.log('Dữ liệu từ localStorage:', this.data);
    } else {
      this.data = []; // Giá trị mặc định nếu không có dữ liệu
      console.log('Không tìm thấy dữ liệu trong localStorage');
    }
  }



  handleOrder() {
    console.log("test", this.orderObj);

    this.orderService.createOrder(this.orderObj).subscribe((data: any) => {
      console.log("create order success", data);
      localStorage.setItem('total', JSON.stringify(0));
      this.router.navigate(['/ordersuccess'])

    }, (error: any) => {
      console.log("create order fail", error);
    })
  }
}
