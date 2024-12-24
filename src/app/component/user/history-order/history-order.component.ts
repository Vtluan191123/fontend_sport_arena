
import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OrderService } from '../../../service/order.service';
import { AuthService } from '../../../service/auth.service';
import { error } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history-order',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './history-order.component.html',
  styleUrl: './history-order.component.css'
})
export class HistoryOrderComponent implements OnInit {

  ngOnInit(): void {
    this.getInforUser()
  }

  id: any
  data: any
  isReview: boolean = false;

  constructor(private orderService: OrderService, private authService: AuthService, private router: Router) { }

  getInforUser() {
    this.authService.getAccount().subscribe((res) => {

      this.id = res.data.id
      this.generaterHistoryOrder(this.id);
    }, (error) => {
      this.router.navigate(['/login'])
    })
  }

  generaterHistoryOrder(id: number) {
    this.orderService.getHistoryOrder(id).subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
    }, (error) => {
      throw new error;
    })
  }

  handleReview(nameField: string) {
    alert(nameField);

  }

}
