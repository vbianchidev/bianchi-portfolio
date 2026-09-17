// locale.types.ts
export type SupportedLocale = 'en' | 'es' | 'pt-br';

export interface LocaleConfig {
  code: SupportedLocale;
  angularLocale: string; // id usado no registerLocaleData
  label: string;
}

export const SUPPORTED_LOCALES: LocaleConfig[] = [
  { code: 'en', angularLocale: 'en', label: 'English' },
  { code: 'es', angularLocale: 'es', label: 'Español' },
  { code: 'pt-br', angularLocale: 'pt-BR', label: 'Português (Brasil)' },
];

export const DEFAULT_LOCALE: SupportedLocale = 'en';
export const LOCALE_STORAGE_KEY = 'app_locale';
