import { Component } from '@angular/core';
import { AboutDisplay } from './about-display/about-display';
import { AboutMe } from './about-me/about-me';
import { AboutSkills } from './about-skills/about-skills';

@Component({
  templateUrl: './about.html',
  styleUrl: './about.scss',
  imports: [AboutDisplay, AboutMe, AboutSkills],
})
export class About {}
