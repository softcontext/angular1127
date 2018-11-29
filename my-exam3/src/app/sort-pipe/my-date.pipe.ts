import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(strDate: string, seperator?: any): any {
    if (!seperator) {
        seperator = '.';
    }

    return strDate.substring(0, 4) + seperator +
      strDate.substring(4, 6) + seperator + strDate.substring(6);
  }

}
