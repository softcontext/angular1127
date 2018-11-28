import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataShareService {
  title: string = 'Hello <mark>World</mark>!';

  constructor() {
    console.log('DataShareService() called.');
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

}
