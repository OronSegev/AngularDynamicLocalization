import { Component, Inject, LOCALE_ID } from '@angular/core';
import { LocaleService } from './core/services/locale.service';
import { LocaleId } from './core/services/Locale.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDynamicLocalization';

  constructor(private localeService: LocaleService, @Inject(LOCALE_ID) public localeId: LocaleId,) {
    this.localeService.initLocale();
  }
}
