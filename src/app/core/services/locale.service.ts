import { getCurrencySymbol } from "@angular/common";
import { Injectable, Optional, SkipSelf } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject, Observable, map, combineLatest, noop } from "rxjs";
import { environment } from "src/environments/environment.development";
import Currency, { Locale, Direction, Language, CurrencyAlpha, LocaleId } from "./Locale.interface";



export const DEFAULT_LOCALE: Locale = {
  localeId: 'he',
  language: 'he',
  currency: {
    code: 'ILS',
    symbol: '₪'
  },
  direction: 'rtl',
}

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private initialized = false;
  private locale = new BehaviorSubject<Locale>(DEFAULT_LOCALE);

  get currentLocaleId(): string {
    return this.locale.value.localeId;
  }

  get currentLanguage(): string {
    return this.locale.value.language;
  }

  get currentCurrencyCode(): string {
    return this.locale.value.currency.code;
  }

  get currentCurrencySymbol(): string {
    return this.locale.value.currency.symbol;
  }

  get direction$(): Observable<Direction> {
    return this.locale.asObservable().pipe(map(locale => locale.direction));
  }

  constructor(
    private router: Router,
    private translate: TranslateService,
    @Optional()
    @SkipSelf()
    otherInstance: LocaleService
  ) {
    if (otherInstance) throw 'LocaleService should have only one instance.';
  }

  /**
  * @remark initialize the locale, shoud be called once on app startup
  * @remark initial locae is the locale set in the environmnet
  */
  initLocale() {
    if (this.initialized) return;

    // ensure that locale is allways set even if locale is missing form environment
    const defaultLocale = environment.locale ||  DEFAULT_LOCALE;

    this.setDefaultLocale(defaultLocale);
    this.subscribeToLocaleChange();

    this.initialized = true;
  }

  setLocaleId(localeId: LocaleId){
    this.setLocale({localeId});
  }

  /**
  * @param Lanaguage - see Langauge type
  */
  setLanguage(language: Language) {
    this.translate.use(language);
    this.setLocale({language});
  }

  setCurrency(currencyCode: CurrencyAlpha) {
    const currency: Currency = {
      code: currencyCode,
      symbol: getCurrencySymbol(currencyCode, 'wide', this.locale.value.localeId)
    };
    this.setLocale({currency});
  }

  private subscribeToLocaleChange() {
    this.locale.subscribe(next => {
      this.refreshApp();
    });
    this.translate.onLangChange.subscribe(next => {
      this.refreshApp();
    });

  }

  private setDefaultLocale(defaultLocale: Locale = DEFAULT_LOCALE) {
    this.translate.setDefaultLang(defaultLocale.language);
    this.setLocale(defaultLocale)
  }

  private setLocale(newLocale: Partial<Locale>) {
    this.locale.next({...this.locale.value, ...newLocale});
  }


  /**
  * @remark reload the app to apply locale changes using voodo magic
  */
  private async refreshApp() {
    this.router.navigated = false;
    await this.router.navigate([], {queryParams: {changeStrategy: 'reuse'}}).catch(noop);
    await this.router.navigate([]).catch(noop);
  }
}
