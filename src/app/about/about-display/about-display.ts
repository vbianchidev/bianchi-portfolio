import { Component } from '@angular/core';
import { BuiTypewriter } from '@bianchi-ui';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-display',
  templateUrl: './about-display.html',
  imports: [TranslatePipe, BuiTypewriter],
  styleUrl: './about-display.scss',
})
export class AboutDisplay {}
