import { Pipe, PipeTransform } from '@angular/core';
import   numWord from 'num-words' 

@Pipe({
  name: 'numtoword',
  standalone: false
})
export class NumtowordPipe implements PipeTransform {

  transform(n:any): any {
    return numWord(Math.round(n));
  }

}
