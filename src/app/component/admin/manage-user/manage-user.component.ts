import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { AuthService } from '../../../service/auth.service';
import { debug } from 'node:console';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [FormsModule, RouterLink, NgClass],
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'] // sửa từ `styleUrl` thành `styleUrls`
})
export class ManageUserComponent implements OnInit {
  listUsers: any;
  totalPage: any;
  filter: any = {
    "page": 1,
    "size": 1,
    "name": ""
  }
  is_Active: number = 1;





  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {


  }
  ngOnInit(): void {

    this.handleGetAllUsers()
  }

  handleImage(urlImage: string) {
    return this.userService.getImage(urlImage);
  }
  getInforUser() {
    this.authService.getAccount().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        this.router.navigate(['/login']);
      }
    );
  }

  handleGetAllUsers() {
    this.userService.getAllUser(this.filter).subscribe(
      (res: any) => {
        this.listUsers = res.data;
        this.totalPage = this.totalPage = [...Array(res.page.totalPage)].map((_, i) => i + 1)
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  handleDeleteUser(id: number) {
    let check = confirm("Are you sure delete item with id " + id)
    if (check) {
      this.userService.deleteUser(id).subscribe((res) => {
        alert('delete success')
        this.handleGetAllUsers()
      })
    }
  }

  handleUserDetail(id: number) {
    this.router.navigate(['/admin/view-user'], {
      queryParams: { id: id }
    })
  }

  handlerSearch() {
    this.handleGetAllUsers()
  }


  handlerPre() {
    this.filter.page--
    this.is_Active = this.filter.page
    this.handleGetAllUsers()
  }

  handlerNext() {
    this.filter.page++
    this.is_Active = this.filter.page
    this.handleGetAllUsers()
  }

  isActive(index: number): void {
    this.is_Active = index;
    this.filter.page = index;
    this.handleGetAllUsers();  // Gọi lại API khi thay đổi trang
  }


}
