import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocaleProvider, CustomReuseStrategyProvider } from './core/providers';
import { HomeModule } from './home/home.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import(
  /* webpackInclude: /(en)\.js$/ */
  /* webpackMode: "lazy-once" */
  /* webpackChunkName: "i18n-extra" */
  '@angular/common/locales/en'
).then((module) => registerLocaleData(module.default));

import(
  /* webpackInclude: /(he)\.js$/ */
  /* webpackMode: "lazy-once" */
  /* webpackChunkName: "i18n-extra" */
  '@angular/common/locales/he'
).then((module) => registerLocaleData(module.default));

import(
  /* webpackInclude: /(el)\.js$/ */
  /* webpackMode: "lazy-once" */
  /* webpackChunkName: "i18n-extra" */
  '@angular/common/locales/el'
).then((module) => registerLocaleData(module.default));

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export let AppInjector: Injector;


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HomeModule,
  ],
  providers: [LocaleProvider, CustomReuseStrategyProvider],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}

