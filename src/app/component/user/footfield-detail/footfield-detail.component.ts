import { Component, HostListener, OnInit } from '@angular/core';
import { FootballfieldDetailServiceService } from '../../../service/footballfield-detail-service.service';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { cartService } from '../../../service/cart.service';
import { log } from 'node:console';


@Component({
  selector: 'app-footfield-detail',
  standalone: true,
  imports: [CurrencyPipe, NgClass, RouterModule,],
  templateUrl: './footfield-detail.component.html',
  styleUrl: './footfield-detail.component.css'
})
export class FootfieldDetailComponent implements OnInit {

  data: any;
  id: number = 0;
  currrent_item: any;
  time_items: any[] = [];
  item_parent: any = 1;
  check: boolean[] = [];
  timeframes: number[] = [];

  footfieldchild_and_timeframe: any = {
    "email": "vtluan1911233@gmail.com",
    "idFootField": "",
    "footfieldChild": {},
    "timeframes": [

    ]
  }






  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private footballFieldDetailService: FootballfieldDetailServiceService,
    private cartService: cartService
  ) { }

  ngOnInit(): void {

    this.footballFieldDetailService.expirationTime().subscribe((data: any) => {
      console.log('set time after now success');

    })

    this.check = new Array(this.time_items.length).fill(false);
    // Lắng nghe sự kiện navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.route.snapshot.queryParams;
        this.id = +currentRoute['id']; // Chuyển `id` thành số
        this.fetchData(); // Gọi fetch data mỗi khi route thay đổi
      }
    });

    // Gọi fetchData lần đầu tiên
    const initialRoute = this.route.snapshot.queryParams;
    this.id = +initialRoute['id'] || 0;
    this.fetchData();

    this.footfieldchild_and_timeframe.idFootField = this.id;
  }

  fetchData(): void {
    if (!this.id) return; // Nếu ID không hợp lệ thì bỏ qua

    this.footballFieldDetailService.getFootFieldById(this.id).subscribe(
      (res: any) => {
        this.data = res.data;

        // Gọi handlerEachField sau khi fetch data thành công
        this.handlerEachField(this.data.list_football_child[0]);

      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  handlerEachField(item: any): void {
    this.item_parent = item.id;
    this.footfieldchild_and_timeframe.footfieldChild = item;
    if (!this.data?.list_football_child) return; // Bảo vệ null/undefined

    const matchedItem = this.data.list_football_child.find((element: any) => element.id === item.id);
    if (matchedItem) {
      this.currrent_item = matchedItem;
      this.time_items = this.currrent_item.time_frame;

    } else {
      console.warn(`No item found with id ${item.id}`);
    }
  }


  @HostListener('window:click', ['$event'])
  active(id: number, event: MouseEvent, id_item: number): void {
    event.preventDefault()
    event.stopPropagation();
    this.check[id] = !this.check[id];
    if (this.check[id]) {
      // Nếu check[id] = true, kiểm tra và thêm vào mảng nếu chưa tồn tại
      let checkExist = this.timeframes.includes(id_item);
      if (!checkExist) {
        this.timeframes.push(id_item);
        console.log("Đã thêm:", this.timeframes);
      } else {
        console.log("Đã tồn tại, không thêm.");
      }
    } else {
      // Nếu check[id] = false, xóa phần tử khỏi mảng
      this.timeframes = this.timeframes.filter(item => item !== id_item);
      console.log("Đã xóa:", this.timeframes);
    }

    this.footfieldchild_and_timeframe.timeframes = this.timeframes;
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent): void {
    this.check = this.check.fill(false);
  }



  handleAddToCart() {
    this.cartService.addToCart(this.footfieldchild_and_timeframe).subscribe((data: any) => {
      this.router.navigate(["/cart"])
      console.log(this.footfieldchild_and_timeframe);

    }, (err: any) => {
      console.log('err', err);

    })
  }


  addToCart() {
    const check_add_item = this.check.find((item: boolean) => item == true);
    if (check_add_item) {
      this.handleAddToCart();
    } else {
      alert('Bạn phải chọn khung giờ muốn đặt')
    }
  }



}
