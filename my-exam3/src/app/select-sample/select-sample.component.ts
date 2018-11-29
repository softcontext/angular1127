import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-sample',
  templateUrl: './select-sample.component.html',
  styleUrls: ['./select-sample.component.scss']
})
export class SelectSampleComponent implements OnInit {
  city: string = "seoul";

  cities: Object[] = [
    { han: "서울", eng: "seoul" },
    { han: "대전", eng: "daejeon" },
    { han: "대구", eng: "daegu" },
    { han: "부산", eng: "pusan" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
