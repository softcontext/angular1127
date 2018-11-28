import { Component, OnInit } from '@angular/core';

import { DataShareService } from '../common/data-share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;

  constructor(private dataShareService: DataShareService) {
    console.log('HomeComponent() called.');
  }

  ngOnInit() {
    this.title = this.dataShareService.getTitle();
  }

  update() {
    alert('Updated!');
    this.dataShareService.setTitle(this.title);
  }
}
