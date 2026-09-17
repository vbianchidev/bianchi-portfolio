import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-switch-theme',
  imports: [NgClass],
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.scss',
})
export class SwitchThemeComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  protected readonly isDark = this.themeService.isDark;

  public ngOnInit(): void {
    this.themeService.init();
  }

  protected toggle(): void {
    this.themeService.toggle();
  }
}
