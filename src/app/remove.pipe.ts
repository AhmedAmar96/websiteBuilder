import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remove'
})
export class RemovePipe implements PipeTransform {

  transform(items: string): any {

    return items.split('').slice(0, items.length).join;
  }

}
