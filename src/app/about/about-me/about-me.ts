import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.html',
  imports: [TranslatePipe],
  styleUrl: './about-me.scss',
})
export class AboutMe {}
