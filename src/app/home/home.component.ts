import { Component } from '@angular/core';
import { BuiTypewriterDirective } from '@bianchi-ui';
import { Navbar } from '../@common/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [BuiTypewriterDirective, Navbar],
})
export class HomeComponent {}
