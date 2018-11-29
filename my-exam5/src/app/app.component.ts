import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
  // OnChanges,
  OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'my-exam5';
  flag = true;
  isShowChild = true;

  constructor() {
    console.log("0. AppComponent() called.");
  }

  // ngOnChanges(changes) {
  //   console.log("1. event 1 : ngOnChanges");
  // }

  ngOnInit() {
    console.log("2. init 1 : ngOnInit");
  }
  ngDoCheck() {
    console.log("3. status 1 : ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("4. init 2 : ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("5. status 2 : ngAfterContentChecked");
  }

  //-------------- 자식 컴포넌트

  ngAfterViewInit() {
    console.log("6. init 3 : ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("7. status 3 : ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("8. event 2 : ngOnDestroy");
  }
}
