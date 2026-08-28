import { Component, signal } from '@angular/core';
import { BuiLogo } from '@bianchi-ui';
import { SwitchThemeComponent } from '../switch-theme/switch-theme.component';

@Component({
  selector: 'app-navbar',
  imports: [BuiLogo, SwitchThemeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);

  protected readonly navbarItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
}
