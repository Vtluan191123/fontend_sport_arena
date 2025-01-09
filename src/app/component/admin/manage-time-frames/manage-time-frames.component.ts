import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-time-frames',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-time-frames.component.html',
  styleUrl: './manage-time-frames.component.css'
})
export class ManageTimeFramesComponent {
  searchName: any
}
