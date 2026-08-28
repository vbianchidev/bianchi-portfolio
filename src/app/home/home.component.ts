import { Component } from '@angular/core';
import { BuiTypewriter } from '@bianchi-ui';
import { Navbar } from '../@common/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [BuiTypewriter, Navbar],
})
export class HomeComponent {}
