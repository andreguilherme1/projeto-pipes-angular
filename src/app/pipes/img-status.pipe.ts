import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgStatus'
})
export class ImgStatusPipe implements PipeTransform {

  transform(status: number): string {
    const INVALID_STATUS = 
    status != 1 && 
    status != 2

    if (INVALID_STATUS) {
      return 'Status inválido'
    } else if (status === 1) {
      return 'assets/icons/active-icon.png'
    } else {
      return 'assets/icons/inactive-icon.png'
    }
  }

}
