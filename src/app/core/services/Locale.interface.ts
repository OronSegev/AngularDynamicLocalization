export type LocaleId = 'he' | 'en' | 'el';
export type CurrencyAlpha = 'ILS' | 'USD' | 'EUR';
export type CurrencySymbol = '$' | '₪' | '€';
export type Language = 'he' | 'en' | 'el';

export enum ELocalesId {
  en = 'en',
  he = 'he',
}

export enum ECurrencyCode {
  ILS = 'ILS',
  USD = 'USD',
  EUR = 'EUR',
}

export enum ECurrenciesSymbol {
  ILS = '$',
  USD = '₪',
  EUR = '€',
}

export enum ELanguages {
  he = 'he',
  en = 'en',
  el = 'el',
}

/**
 *  Currency Interface,
 *  @property Code - currency Alpha 3 code
 *  @property Symbol- Currency Symbol (e.g $)
 */
export default interface Currency {
  code: CurrencyAlpha;
  symbol: string;
}

/**
 *  Locale Interface,
 *  @property localeId - Angular Locale ID
 *  @property language - language code set in ngx-translate
 *  @property Currency - Currency Interface
 */
export interface Locale {
  localeId: LocaleId;
  language: Language;
  currency: Currency;
  direction: Direction
};

export type Direction = 'ltr' | 'rtl';
