import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  data: any
  id: any

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParams['id']);
    this.handleShowUserDetail(this.id)
  }



  handleShowUserDetail(id: any) {
    this.userService.getUserById(id).subscribe((res: any) => {
      console.log(res);

      this.data = res.data
    })
  }
  handldeBack() {
    this.router.navigate(['/admin/users'])
  }

  handleImage(urlImage: string) {
    return this.userService.getImage(urlImage);
  }
}
