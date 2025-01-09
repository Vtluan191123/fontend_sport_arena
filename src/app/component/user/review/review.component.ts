import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate } from '@angular/animations';
import { SendDataService } from '../../../service/send-data.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../service/user.service';
import { error } from 'console';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {


  previewImages: string[] = [];

  objReview: any = {
    'userId': '',
    'nameFootFiled': '',
    'start': '5',
    'content': '',
    'files': []
  }

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private sendData: SendDataService) { }
  ngOnInit(): void {
    this.objReview.nameFootFiled = localStorage.getItem('nameField')
    this.getInforUser()
  }

  getInforUser() {
    this.authService.getAccount().subscribe((res) => {


      this.objReview.userId = res.data.id

    }, (error) => {
      this.router.navigate(['/login'])
    })
  }

  handleStart(event: Event) {
    const target = event.target as HTMLInputElement; // Ép kiểu
    this.objReview.start = target.value;
  }

  handleFileUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const files = Array.from(target.files);

      // Kiểm tra giới hạn 3 ảnh
      if (files.length + this.previewImages.length > 3) {
        alert('Bạn chỉ được chọn tối đa 3 ảnh.');
        target.value = ''; // Reset input
        this.previewImages.splice(0, this.previewImages.length);
        return;
      }

      // Xử lý preview ảnh
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target?.result) {
            this.previewImages.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
        this.objReview.files.push(file);
      });
    }
  }

  removeImage(index: number) {
    this.previewImages.splice(index, 1); // Xóa ảnh theo chỉ số
    this.objReview.files.splice(index, 1);
  }

  onSubmit() {
    console.log(this.objReview);


    const formData = new FormData()
    formData.set('userId', this.objReview.userId);
    formData.set('nameFootFiled', this.objReview.nameFootFiled);
    formData.set('start', this.objReview.start);
    formData.set('content', this.objReview.content);

    ///set file if selected
    if (this.objReview.files) {
      for (const file of this.objReview.files) {
        formData.append("files", file);
      }
    }

    this.userService.postReview(formData).subscribe((res) => {
      this.router.navigate(['/home'])

    }, (error) => {
      console.log(error);
    })

  }
}
