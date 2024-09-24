import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(status: number): string {
    const INVALID_STATUS = 
    status != 1 && 
    status != 2

    if (INVALID_STATUS) {
      return 'Status inválido'
    } else if (status === 1) {
      return 'Ativo'
    } else {
      return 'Inativo'
    }
  }
}
