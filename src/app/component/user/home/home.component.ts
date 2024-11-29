import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../layout-user/header/header.component';
import { FooterComponent } from '../layout-user/footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeServiceService } from '../../../service/home-service.service';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, CurrencyPipe, RouterLink, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  totalPage: number[] = [];

  is_Active: number = 1;

  page: number = 1;

  constructor(private homeService: HomeServiceService) {

  }

  list_football_fields: any = [];

  ngOnInit(): void {
    this.getFootballFields();
  }
  // Hàm gọi API để lấy danh sách sân bóng
  getFootballFields(): void {
    this.homeService.getAllFootField(this.page).subscribe((res: any) => {
      this.list_football_fields = res.data;

      // Cập nhật số trang (totalPage) từ API
      this.totalPage = [...Array(res.page.totalPage)].map((_, i) => i + 1);


      console.log(this.totalPage); // In ra số trang
    });
  }

  // Hàm để đánh dấu trang đang được chọn
  isActive(index: number): void {
    this.is_Active = index;
    this.page = index;
    this.getFootballFields();  // Gọi lại API khi thay đổi trang
  }

}
