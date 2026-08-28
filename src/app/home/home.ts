import { Component } from '@angular/core';
import { BuiTypewriter } from '@bianchi-ui';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [BuiTypewriter, TranslatePipe],
})
export class Home {}
