import { Component } from '@angular/core';
import { BuiTypewriter } from '@bianchi-ui';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-display',
  templateUrl: './portfolio-display.html',
  styleUrl: './portfolio-display.scss',
  imports: [BuiTypewriter, TranslatePipe],
})
export class PortfolioDisplay {}
