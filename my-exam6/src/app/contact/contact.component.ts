import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, DoCheck {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

  ngDoCheck() {
    console.log(this.route);
    this.id = this.route.snapshot.params['id'];
  }
}
