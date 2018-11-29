import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './sort-pipe.component';

@Pipe({
  name: 'sortingCompanies'
})
export class SortingCompaniesPipe implements PipeTransform {

  transform(companies: Company[], path: string[], order: number): Company[] {

    // Check if is not null
    if (!companies || !path || !order) return companies;

    return companies.sort((a: Company, b: Company) => {
      // {'A', 'aa', {country: 'Korea', cash: 100}}
      // {'B', 'bb', {country: 'Japan', cash: 300}}

      // ['company']
      // ['info','cash']

      // We go for each property followed by path
      path.forEach(property => {
        a = a[property]; // a.info.cash
        b = b[property]; // b.info.cash
      })
      console.log(a, b);

      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    })
  }

}
