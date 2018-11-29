import { Component, OnInit, OnDestroy } from '@angular/core';
import { BridgeService } from '../common/bridge.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnDestroy {
  count: number = 0;
  subscription: Subscription;

  constructor(private bridgeService: BridgeService) { }

  ngOnInit() {
    this.subscription = this.bridgeService.observe().subscribe(data => {
      console.log(data); // { text: message }
      if (!data) {
        this.count = 0;
        return;
      }
      if (data.text === 'plus') {
        this.count++;
      } else {
        this.count--;
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
