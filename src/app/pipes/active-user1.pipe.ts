import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'active'
})
export class ActiveUser1Pipe implements PipeTransform {

  transform(value: any[], active: boolean): any[] {
    return value.filter(i =>  i.active === active);
  }

}
