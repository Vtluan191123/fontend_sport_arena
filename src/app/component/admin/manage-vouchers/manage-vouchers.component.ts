import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { VouchersService } from '../../../service/vouchers.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-manage-vouchers',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './manage-vouchers.component.html',
  styleUrl: './manage-vouchers.component.css'
})
export class ManageVouchersComponent implements OnInit {


  filter: any = {
    "page": 1,
    "size": 1,
    "name": ""
  }
  totalPage: any;
  is_Active: number = 1;
  data: any
  ngOnInit(): void {
    this.getAllVoucher()
  }


  constructor(private vouchersService: VouchersService) { }

  getAllVoucher(): any {
    this.vouchersService.getAllVouchers(this.filter).subscribe((res: any) => {
      this.data = res.data
      this.totalPage = this.totalPage = [...Array(res.page.totalPage)].map((_, i) => i + 1)

    })
  }


  handlerSearch() {
    this.getAllVoucher()
  }


  handlerPre() {
    this.filter.page--
    this.is_Active = this.filter.page
    this.getAllVoucher()
  }

  handlerNext() {
    this.filter.page++
    this.is_Active = this.filter.page
    this.getAllVoucher()
  }

  isActive(index: number): void {
    this.is_Active = index;
    this.filter.page = index;
    this.getAllVoucher();  // Gọi lại API khi thay đổi trang
  }

}
