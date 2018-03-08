import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucase'
})
export class UcasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toUpperCase();
  }

}
