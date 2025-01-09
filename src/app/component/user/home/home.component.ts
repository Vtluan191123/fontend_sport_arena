import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { HomeServiceService } from '../../../service/home-service.service';
import { CurrencyPipe, NgClass } from '@angular/common';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgClass, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  totalPage: number[] = [];

  is_Active: number = 1;

  urlImage: any;


  filter: any = {
    "page": "1",
    "size": "8",
    "name": "",
    "typeField": "",
    "timeFrame": "",
    "sort": "",
    "capacity": "",
    "price": ""
  }

  constructor(private homeService: HomeServiceService, private router: Router, private userService: UserService) {

  }
  list_football_fields: any = [];

  ngOnInit(): void {

    this.getFootballFields();
    this.resetLocalStoge()
  }
  // Hàm gọi API để lấy danh sách sân bóng
  getFootballFields(): void {
    this.homeService.getAllFootField(this.filter).subscribe((res: any) => {
      this.list_football_fields = res.data;
      this.urlImage = this.userService.urlGetImage;

      // Cập nhật số trang (totalPage) từ API
      this.totalPage = [...Array(res.page.totalPage)].map((_, i) => i + 1);

    });
  }

  // Hàm để đánh dấu trang đang được chọn
  isActive(index: number): void {
    this.is_Active = index;
    this.filter.page = index;
    this.getFootballFields();  // Gọi lại API khi thay đổi trang
  }


  navigateFootballDetail(id: any) {
    this.router.navigate(['/footfield_detail'], {
      queryParams: { id: id }
    })
  }

  Back(): void {
    if (this.filter.page > 1) { // Kiểm tra không được giảm dưới trang 1
      this.filter.page--; // Giảm số trang hiện tại
      this.is_Active = this.filter.page; // Cập nhật trang đang active
      this.getFootballFields(); // Gọi API để lấy dữ liệu
    }
  }

  Next(): void {
    if (this.filter.page < this.totalPage.length) { // Kiểm tra không vượt quá số trang cuối
      this.filter.page++; // Tăng số trang hiện tại
      this.is_Active = this.filter.page; // Cập nhật trang đang active
      this.getFootballFields(); // Gọi API để lấy dữ liệu
    }
  }

  resetLocalStoge() {
    const today = new Date().toLocaleDateString('vi-VN'); // Định dạng ngày Việt Nam

    // Lấy ngày hiện tại (YYYY-MM-DD)
    const storedDate = localStorage.getItem('lastUpdatedDate');

    if (storedDate !== today) {
      // Nếu đã sang ngày mới, cập nhật giá trị trong localStorage
      localStorage.setItem('lastUpdatedDate', today);
      localStorage.setItem('total', JSON.stringify(0)); // Giá trị mới bạn muốn đặt
      console.log('LocalStorage updated for new day:', today);
    } else {
      console.log('LocalStorage is already up to date for:', today);
    }
  }



}
