import { Component } from '@angular/core';
import { AboutDisplay } from './about-display/about-display';
import { AboutEducation } from './about-education/about-education';
import { AboutExperience } from './about-experience/about-experience';
import { AboutMe } from './about-me/about-me';
import { AboutSkills } from './about-skills/about-skills';

@Component({
  templateUrl: './about.html',
  imports: [AboutDisplay, AboutMe, AboutSkills, AboutExperience, AboutEducation],
})
export class About {}
