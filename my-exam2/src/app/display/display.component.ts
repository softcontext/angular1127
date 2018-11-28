import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../common/bridge.service';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  count: number = 0;

  constructor(private bridgeService: BridgeService) { }

  ngOnInit() {
    this.bridgeService.observe().subscribe(data => {
      console.log(data); // { text: message }
      if (data.text === 'plus') {
        this.count++;
      } else {
        this.count--;
      }
    });
  }

}
