import { Component, signal } from '@angular/core';
import { BuiLogo } from '@bianchi-ui';

@Component({
  selector: 'app-navbar',
  imports: [BuiLogo],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly menuOpen = signal(false);

  protected readonly navbarItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
}
