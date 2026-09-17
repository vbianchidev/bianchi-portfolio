import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/localization.service';
import { SupportedLocale } from '../../types/locale';

@Component({
  selector: 'app-switch-lang',
  templateUrl: './switch-lang.component.html',
  styleUrl: './switch-lang.component.scss',
})
export class SwitchThemeComponent {
  private readonly localeService = inject(LocaleService);

  public readonly currentLocale = this.localeService.locale;

  public onChange(locale: SupportedLocale): void {
    this.localeService.setLocale(locale);
  }
}
