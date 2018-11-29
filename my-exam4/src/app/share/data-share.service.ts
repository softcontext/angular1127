import { Injectable } from '@angular/core';

@Injectable()
export class DataShareService {
  message: string = 'message of DataShareService';

  constructor() { }

  getMessage() {
    return this.message;
  }
}
