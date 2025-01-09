import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { AuthService } from '../../../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { SendDataService } from '../../../service/send-data.service';

@Component({
  selector: 'app-infor-user',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './infor-user.component.html',
  styleUrl: './infor-user.component.css'
})
export class InforUserComponent {

  imageUrl: string = '';
  dataInfor: any

  objDataInfor: any = {
    'id': '',
    'name': '',
    'phoneNumber': '',
    'file': undefined
  }


  constructor(private userService: UserService, private authService: AuthService, private router: Router, private sendDataService: SendDataService) { }

  ngOnInit() {
    this.getAccount()
  }

  getAccount() {
    this.authService.getAccount().subscribe((res: any) => {
      this.dataInfor = res;
      this.imageUrl = this.userService.urlGetImage + "user-images/" + this.dataInfor.data.image
      this.objDataInfor.id = this.dataInfor.data.id
      this.objDataInfor.name = this.dataInfor.data.name
      this.objDataInfor.phoneNumber = this.dataInfor.data.phoneNumber

      console.log(this.objDataInfor);

    })
  }

  triggerFileInput(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  handleShowImage(event: any) {
    const file = event.target.files[0];
    if (file !== null) {
      this.imageUrl = URL.createObjectURL(file);
      this.objDataInfor.file = file;
    }

  }


  onSubmit() {
    console.log(this.objDataInfor);

    const formData = new FormData()
    formData.append('id', this.objDataInfor.id);
    formData.append('name', this.objDataInfor.name);
    formData.append('phoneNumber', this.objDataInfor.phoneNumber);

    ///Append file if selected
    if (this.objDataInfor.file) {
      formData.append('file', this.objDataInfor.file);
    }
    console.log(formData);

    // Gửi yêu cầu PUT hoặc POST mà không thiết lập Content-Type
    this.userService.putUser(formData).subscribe((res: any) => {

      this.sendDataService.updateInforUser(res.data);
      this.router.navigate(['/'])
    }, (error) => {
      console.log(error);
    });
  }



}
