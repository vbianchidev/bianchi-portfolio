import { computed, inject, Injectable, signal } from '@angular/core';
import { LocalStoreService } from './local-storage.service';

export type ThemeOption = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageService = inject(LocalStoreService);
  private readonly THEME_STORAGE_KEY = 'THEME';

  public readonly theme = signal<ThemeOption>('light');
  public readonly isDark = computed(() => this.theme() === 'dark');

  public init(): void {
    const savedTheme = this.storageService.get<ThemeOption>(this.THEME_STORAGE_KEY);
    const initialTheme = savedTheme ?? this.getSystemTheme();

    this.theme.set(initialTheme);
    this.applyTheme(initialTheme);
  }

  public toggle(): void {
    const newTheme: ThemeOption = this.isDark() ? 'light' : 'dark';

    this.theme.set(newTheme);
    this.storageService.set(this.THEME_STORAGE_KEY, newTheme);
    this.applyTheme(newTheme);
  }

  private getSystemTheme(): ThemeOption {
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  private applyTheme(theme: ThemeOption): void {
    document.documentElement.dataset['theme'] = theme;
  }
}
