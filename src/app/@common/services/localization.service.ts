import { registerLocaleData } from '@angular/common';
import { computed, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  LocaleConfig,
  SUPPORTED_LOCALES,
  SupportedLocale,
} from '../types/locale';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly _locale = signal<SupportedLocale>(DEFAULT_LOCALE);
  private readonly registeredAngularLocales = new Set<string>();

  readonly locale = this._locale.asReadonly();

  readonly localeConfig = computed<LocaleConfig>(() =>
    SUPPORTED_LOCALES.find((l) => l.code === this._locale())!,
  );

  readonly angularLocaleId = computed(() => this.localeConfig().angularLocale);

  constructor(private translate: TranslateService) {
    this.translate.addLangs(SUPPORTED_LOCALES.map((l) => l.code));
  }

  async init(): Promise<void> {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as SupportedLocale | null;
    const browser = this.detectBrowserLocale();
    const initial = saved ?? browser ?? DEFAULT_LOCALE;
    await this.setLocale(initial);
  }

  async setLocale(locale: SupportedLocale): Promise<void> {
    const config = SUPPORTED_LOCALES.find((l) => l.code === locale);
    if (!config) {
      console.warn(`Locale "${locale}" não é suportado, usando default.`);
      locale = DEFAULT_LOCALE;
    }

    await this.registerAngularLocaleData(locale);

    this.translate.use(locale);
    this._locale.set(locale);
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }

  private detectBrowserLocale(): SupportedLocale | null {
    const browserLang = navigator.language?.toLowerCase() ?? '';
    const match = SUPPORTED_LOCALES.find(
      (l) => browserLang === l.code || browserLang.startsWith(l.code.split('-')[0]),
    );
    return match?.code ?? null;
  }

  private async registerAngularLocaleData(locale: SupportedLocale): Promise<void> {
    const config = SUPPORTED_LOCALES.find((l) => l.code === locale)!;
    if (this.registeredAngularLocales.has(config.angularLocale)) return;

    let localeModule;
    switch (locale) {
      case 'pt-br':
        localeModule = await import('@angular/common/locales/pt');
        break;
      case 'es':
        localeModule = await import('@angular/common/locales/es');
        break;
      case 'en':
      default:
        localeModule = await import('@angular/common/locales/en');
        break;
    }

    registerLocaleData(localeModule.default, config.angularLocale);
    this.registeredAngularLocales.add(config.angularLocale);
  }
}
