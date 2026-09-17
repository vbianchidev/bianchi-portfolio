import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BuiLogo } from '@bianchi-ui';
import { TranslateService } from '@ngx-translate/core';
import { SwitchThemeComponent } from '../switch-theme/switch-theme.component';

@Component({
  selector: 'app-navbar',
  imports: [BuiLogo, SwitchThemeComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly translate = inject(TranslateService);
  protected readonly menuOpen = signal(false);

  protected readonly navbarItems = [
    { label: this.translate.instant('COMMON.HOME'), href: '/' },
    { label: this.translate.instant('COMMON.ABOUT'), href: '/about' },
    { label: this.translate.instant('COMMON.PORTFOLIO'), href: '/portfolio' },
    { label: this.translate.instant('COMMON.BLOG'), href: '/blog' },
  ];
}
