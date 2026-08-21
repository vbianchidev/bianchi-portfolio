import { Component } from '@angular/core';
import { BuiTypewriterDirective } from '@bianchi-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [BuiTypewriterDirective],
})
export class HomeComponent {}
