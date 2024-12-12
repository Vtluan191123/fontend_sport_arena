import { Component } from '@angular/core';
import { HomeServiceService } from '../../../service/home-service.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgClass, CurrencyPipe, RouterLink, FormsModule, NgFor],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  totalPage: number[] = [];

  filter: any = {
    "page": "1",
    "size": "6",
    "name": "",
    "typeField": "",
    "timeFrame": "",
    "sort": "",
    "capacity": "",
    "price": []
  }

  list_football_fields: any = [];







  constructor(private homeService: HomeServiceService, private router: Router) { }



  ngOnInit(): void {

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)  // Lắng nghe sự kiện NavigationEnd
    ).subscribe(() => {
      this.getFootballFields();
    });

    this.getFootballFields();

  }


  // Hàm gọi API để lấy danh sách sân bóng
  getFootballFields(): void {
    this.homeService.getAllFootField(this.filter).subscribe((res: any) => {
      this.list_football_fields = res;
      // Cập nhật số trang (totalPage) từ API
      this.totalPage = [...Array(res.page.totalPage)].map((_, i) => i + 1);
    });
  }

  // Hàm để đánh dấu trang đang được chọn
  isActive(index: number): void {
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
      this.getFootballFields(); // Gọi API để lấy dữ liệu
    }
  }

  Next(): void {
    if (this.filter.page < this.totalPage.length) { // Kiểm tra không vượt quá số trang cuối
      this.filter.page++; // Tăng số trang hiện tại
      this.getFootballFields(); // Gọi API để lấy dữ liệu
    }
  }

  searchName() {

    this.getFootballFields();
    this.filter.name = ''

  }

  handleFilter() {
    this.filter.page = '1'
    this.getFootballFields();
  }

  onPriceChange(event: any): void {
    const value = event.target.value;
    if (event.target.checked) {
      // Nếu checkbox được chọn, thêm giá trị vào mảng
      this.filter.price.push(value);
    } else {
      // Nếu checkbox bị bỏ chọn, loại bỏ giá trị khỏi mảng
      const index = this.filter.price.indexOf(value);
      if (index !== -1) {
        this.filter.price.splice(index, 1);
      }
    }
    console.log(this.filter.price);  // Để kiểm tra giá trị trong mảng filter.price
  }

}
