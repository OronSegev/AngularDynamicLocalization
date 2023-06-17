import { Component, OnInit } from '@angular/core';
import { Language, CurrencyAlpha, LocaleId } from 'src/app/core/services/Locale.interface';
import { LocaleService } from 'src/app/core/services/locale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  now = new Date();

  constructor(private localeService:LocaleService) {}

  ngOnInit(): void {}

  onLanguageClicked(langauge: Language) {
    this.localeService.setLanguage(langauge);
  }

  onLocaleClicked(localeId: LocaleId) {
    this.localeService.setLocaleId(localeId);
  }

  onCurrencyClicked(currencyCode: CurrencyAlpha) {
    this.localeService.setCurrency(currencyCode);
  }
}
