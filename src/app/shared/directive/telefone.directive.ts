import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mascaraTelefone'
})
export class MascaraTelefonePipe implements PipeTransform {
  transform(telefone: string): string {
    return telefone.length >= 4 ? telefone.replace(/^(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3') : telefone;
  }
}
