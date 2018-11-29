import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../common/bridge.service';

@Component({
  selector: 'control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor(private bridgeService: BridgeService) { }

  ngOnInit() {
  }

  plus() {
    this.bridgeService.sendMessage('plus');
  }

  minus() {
    this.bridgeService.sendMessage('minus');
  }

  zero() {
    this.bridgeService.clearMessage();
  }
}
