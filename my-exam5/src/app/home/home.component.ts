import {
  Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('data') title: string;
  @Input() flag: boolean;

  constructor() {
    console.log("    0. HomeComponent() called.");
  }

  ngOnChanges(changes) {
    console.log("    1. event 1 : ngOnChanges");
    console.log(changes);
  }
  ngOnInit() {
    console.log("    2. init 1 : ngOnInit");
  }
  ngDoCheck() {
    console.log("    3. status 1 : ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("    4. init 2 : ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("    5. status 2 : ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("    6. init 3 : ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("    7. status 3 : ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("    8. event 2 : ngOnDestroy");
  }
}
