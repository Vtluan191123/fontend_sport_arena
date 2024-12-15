import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-infor-user',
  standalone: true,
  imports: [],
  templateUrl: './infor-user.component.html',
  styleUrl: './infor-user.component.css'
})
export class InforUserComponent {

  imageUrl: string = 'http://localhost:8080/images/abc.png';

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Tên file ảnh
  }

}
