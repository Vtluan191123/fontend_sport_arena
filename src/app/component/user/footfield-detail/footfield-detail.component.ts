import { Component, OnInit } from '@angular/core';
import { FootballfieldDetailServiceService } from '../../../service/footballfield-detail-service.service';
import { CurrencyPipe, NgClass } from '@angular/common';
import { log } from 'console';
@Component({
  selector: 'app-footfield-detail',
  standalone: true,
  imports: [CurrencyPipe, NgClass],
  templateUrl: './footfield-detail.component.html',
  styleUrl: './footfield-detail.component.css'
})
export class FootfieldDetailComponent implements OnInit {

  data: any;
  id: number = 7;
  constructor(private FootballfieldDetailServiceService: FootballfieldDetailServiceService) { }
  ngOnInit(): void {
    this.fetchData()
    console.log("check", this.data.list_football_child);
    this.handlerEachField(this.id_item)
  }

  fetchData() {
    this.FootballfieldDetailServiceService.getFootFieldById(this.id).subscribe((res: any) => {

      this.data = res.data;
      console.log(res);

    })
  }


  currrent_item: any;
  time_items: any[] = [];
  id_item = 1;

  handlerEachField(id_item: number): any {
    for (let item of this.data.list_football_child) {
      if (item.id === id_item) {
        this.currrent_item = item;
      }
    }
    this.time_items = this.currrent_item.time_frame

    console.log(this.time_items);


    debugger
  }
}
