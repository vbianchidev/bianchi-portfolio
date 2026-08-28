import { Component } from '@angular/core';
import { BuiTypewriter } from '@bianchi-ui';
import { TranslatePipe } from '@ngx-translate/core';
import { NavbarComponent } from '../@common/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [BuiTypewriter, NavbarComponent, TranslatePipe],
})
export class HomeComponent {}
