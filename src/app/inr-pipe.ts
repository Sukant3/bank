import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inr',
  standalone: false
})
export class InrPipe implements PipeTransform {

  transform(n:any): any {
    return n.toLocaleString('en-IN');
  }

}
