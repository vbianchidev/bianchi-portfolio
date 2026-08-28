import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-switch-theme',
  imports: [NgClass],
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.scss',
})
export class SwitchThemeComponent {
  protected readonly isDark = signal(document.documentElement.dataset['theme'] === 'dark');

  protected toggle(): void {
    const newTheme = this.isDark();
    this.isDark.set(!newTheme);
    document.documentElement.dataset['theme'] = newTheme ? 'dark' : 'light';
  }
}
