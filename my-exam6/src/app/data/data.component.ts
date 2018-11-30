import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../guard/contact-resolve-guard.guard';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  contact: Contact;

  // ActivatedRouteSnapshot == ActivatedRoute.snapshot
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(JSON.stringify(this.route.snapshot.data));

    this.contact = this.route.snapshot.data['contact'];
  }
}
