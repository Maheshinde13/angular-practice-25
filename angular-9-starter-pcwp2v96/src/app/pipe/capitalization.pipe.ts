import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalization'
})
export class CapitalizationPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return null;
  }

}