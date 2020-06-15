import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(input: string): string {
    return input.slice(0, 17) + "...";
  }

}
