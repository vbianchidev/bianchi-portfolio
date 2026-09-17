import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../@common/components/section-title/section-title.component';
import { BuiDatePipe } from '../../@common/pipe/bui-date.pipe';
import { Experience } from '../../@common/types/experience';

@Component({
  selector: 'app-about-experience',
  templateUrl: './about-experience.html',
  styleUrls: ['./about-experience.scss'],
  imports: [TranslatePipe, BuiDatePipe, SectionTitleComponent],
})
export class AboutExperience implements OnInit {
  private translate = inject(TranslateService);

  protected experiences = signal<Experience[]>([]);

  ngOnInit(): void {
    this.translate.get('ABOUT-EXPERIENCE.EXPERIENCES').subscribe((experience: Experience[]) => {
      this.experiences.set(experience);
    });
  }
}
