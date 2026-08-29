import { Component } from '@angular/core';
import { AboutDisplay } from './about-display/about-display';
import { AboutMe } from './about-me/about-me';

@Component({
  templateUrl: './about.html',
  styleUrl: './about.scss',
  imports: [AboutDisplay, AboutMe],
})
export class About {}
