import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../share/data-share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string;

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    this.message = this.dataShareService.getMessage();
  }

}
