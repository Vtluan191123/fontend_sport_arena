import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { error } from 'console';
import { SendDataService } from '../../../service/send-data.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: any = {
    "email": "",
    "password": ""
  }

  dataLogin: any
  dataFallLogin: any

  constructor(private authService: AuthService, private router: Router, private sendDataservice: SendDataService) {
  }

  login() {
    this.authService.loginPost(this.userLogin).subscribe((res: any) => {
      this.dataLogin = res.data
      localStorage.setItem('token', res.data.token.accessToken)
      this.sendDataservice.updateInforUser(res.data.userLogin);
      this.sendDataservice.updateLocalStorage(res.data.userLogin.totalCart)
      this.router.navigate(['/']);
    }, (error) => {
      console.log('err', error);
      this.dataFallLogin = error.error.messenger;

      console.log(this.dataFallLogin);

    })
  }

  loginWithGoogle() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }


}
