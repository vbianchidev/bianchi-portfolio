import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BuiLogo } from '@bianchi-ui';
import { SwitchThemeComponent } from '../switch-theme/switch-theme.component';

@Component({
  selector: 'app-navbar',
  imports: [BuiLogo, SwitchThemeComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);

  protected readonly navbarItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];
}
