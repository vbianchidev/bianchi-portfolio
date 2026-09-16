import { Component, inject } from '@angular/core';
import { ProfileService } from '../@common/services/profile.service';
import { AboutDisplay } from './about-display/about-display';
import { AboutEducation } from './about-education/about-education';
import { AboutExperience } from './about-experience/about-experience';
import { AboutMe } from './about-me/about-me';
import { AboutSkills } from './about-skills/about-skills';

@Component({
  templateUrl: './about.html',
  imports: [AboutDisplay, AboutMe, AboutSkills, AboutExperience, AboutEducation],
})
export class About {
  private readonly profileService = inject(ProfileService);

  data = this.profileService.store;
}
