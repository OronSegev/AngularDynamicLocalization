import { Pipe, PipeTransform } from '@angular/core';
import { LocaleService } from '../services/locale.service';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  constructor(private localeService: LocaleService){

  }

  transform(value: any, ...args: any[]): string {
    return new Intl.NumberFormat(this.localeService.currentLocaleId, { style: 'currency', currency: this.localeService.currentCurrencyCode }).format(value)
  }

}
