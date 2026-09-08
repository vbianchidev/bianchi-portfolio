import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../@common/components/section-title/section-title.component';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.html',
  styleUrl: './about-skills.scss',
  imports: [SectionTitleComponent, TranslatePipe],
})
export class AboutSkills {
  skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Git', 'GitHub', 'Figma'];
}
