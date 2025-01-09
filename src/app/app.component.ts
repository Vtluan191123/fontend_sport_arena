import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { LoginComponent } from './component/user/login/login.component';
import { ResgiterComponent } from './component/user/resgiter/resgiter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football_field_fontend';

  isLogin: boolean = false
  isRegister: boolean = false

  receiveLogin(event: boolean) {
    this.isLogin = event;
    console.log('login', this.isLogin);
    // Cập nhật trạng thái đăng nhập
  }

  // Nhận sự kiện từ component con (Register)
  receiveRegister(event: boolean) {
    this.isRegister = event;
    console.log('resgiter', this.isRegister); // Cập nhật trạng thái đăng ký
  }
}
