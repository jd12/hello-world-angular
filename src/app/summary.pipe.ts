import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})

export class SummaryPipe implements PipeTransform {
  transform(value: string, inputLimit?: number) {
    if (!value) {
      return null;
    }
    let limit = (inputLimit) ? inputLimit : 50;
    return value.substr(0, limit) + '...';
  }
}
