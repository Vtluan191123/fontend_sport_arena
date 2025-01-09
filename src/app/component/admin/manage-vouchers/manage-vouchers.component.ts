import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-manage-vouchers',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-vouchers.component.html',
  styleUrl: './manage-vouchers.component.css'
})
export class ManageVouchersComponent implements OnInit {


  ngOnInit(): void {

  }
  searchName: any

  constructor(private userService: UserService) { }
}
