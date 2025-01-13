import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimeframeService } from '../../../service/timeframe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-time-frames',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-time-frames.component.html',
  styleUrl: './manage-time-frames.component.css'
})
export class ManageTimeFramesComponent implements OnInit {
  data: any;
  totalPage: any;
  filter: any = {
    "page": 1,
    "size": 1,
  }
  is_Active: number = 1;

  constructor(
    private timeFrameService: TimeframeService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.handleGetAllTimeFrame()
  }

  handleGetAllTimeFrame() {
    this.timeFrameService.getAllTimeFrames(this.filter).subscribe(
      (res: any) => {
        this.data = res.data;
        this.totalPage = this.totalPage = [...Array(res.page.totalPage)].map((_, i) => i + 1)
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  handleDeleteTimeFrame(id: number) {
    let check = confirm("Are you sure delete item with id " + id)
    if (check) {
      this.timeFrameService.deleteTimeFrame(id).subscribe((res: any) => {
        this.handleGetAllTimeFrame()

      })
    }
  }


  // handleUserDetail(id: number) {
  //   this.router.navigate(['/admin/view-user'], {
  //     queryParams: { id: id }
  //   })
  // }



  handlerPre() {
    this.filter.page--
    this.is_Active = this.filter.page
    this.handleGetAllTimeFrame()
  }

  handlerNext() {
    this.filter.page++
    this.is_Active = this.filter.page
    this.handleGetAllTimeFrame()
  }

  isActive(index: number): void {
    this.is_Active = index;
    this.filter.page = index;
    this.handleGetAllTimeFrame();  // Gọi lại API khi thay đổi trang
  }

}
