import { Component, OnInit } from '@angular/core';

import { DataShareService } from '../common/data-share.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title: string;

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    this.title = this.dataShareService.getTitle();
  }

}
