import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyPipe } from '../core/pipes/currency.pipe';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [
    HomeComponent,
    CurrencyPipe
  ],
    providers: [],
    imports: [CommonModule, HomeRoutingModule, TranslateModule]
})
export class HomeModule {}
