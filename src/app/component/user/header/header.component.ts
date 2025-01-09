import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { cartService } from '../../../service/cart.service';
import { AuthService } from '../../../service/auth.service';
import { error } from 'console';
import { SendDataService } from '../../../service/send-data.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  total: number = 0
  inforUser: any;
  urlImage: any;

  constructor(private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private sendDataservice: SendDataService) { }

  ngOnInit(): void {
    this.getTotal()
    this.getInforUser();

  }

  getInforUser() {
    this.authService.getAccount().subscribe((res) => {


      this.sendDataservice.updateLocalStorage(res.data.totalCart)
      this.sendDataservice.updateInforUser(res.data); // Cập nhật dữ liệu vào BehaviorSubject
      console.log('run here', res.data);
    });

    // Subscribe vào BehaviorSubject để nhận dữ liệu
    this.sendDataservice.currentDataInforUsere.subscribe((data: any) => {
      this.inforUser = data;


      this.urlImage = this.userService.urlGetImage + "user-images/" + this.inforUser.image
    }, (error: any) => {
      console.log(error);
    });
  }

  getTotal() {
    this.sendDataservice.currentDataLocalstorage.subscribe((data: any) => {
      this.total = data

      console.log('check total', data);

    })
  }

  routerShop() {
    this.router.navigate(['/shop'])
  }

  logOut() {
    this.authService.logout().subscribe((res: any) => {
      alert('logout success!!!')
      localStorage.clear()
      this.sendDataservice.updateInforUser(null)
      this.sendDataservice.updateLocalStorage(0);
      this.router.navigate(['/login'])
    }, (error) => {
      throw error
    })
  }






}