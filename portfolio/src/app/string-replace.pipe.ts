import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stringReplace'})
export class StringReplacePipe implements PipeTransform {
  transform(value: string, valueToReplace: string, replacement: string): string {
    if (value.includes(valueToReplace)) {
      if (replacement) {
        replacement = `, ${replacement}`;
      } else {
        replacement = '';
      }
      return value.replace(valueToReplace, replacement);
    } else {
      return value;
    }
  }
}
