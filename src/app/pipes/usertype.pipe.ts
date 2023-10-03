import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usertype'
})
export class UsertypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
