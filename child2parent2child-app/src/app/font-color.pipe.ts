import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fontColor'
})
export class FontColorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}