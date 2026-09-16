import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../@common/components/section-title/section-title.component';
import { Education } from '../../@common/types/education';

@Component({
  selector: 'app-about-education',
  templateUrl: './about-education.html',
  styleUrls: ['./about-education.scss'],
  imports: [SectionTitleComponent, TranslatePipe, DatePipe],
})
export class AboutEducation implements OnInit {
  private translate = inject(TranslateService);

  protected educations = signal<Education[]>([]);

  ngOnInit(): void {
    this.translate.get('ABOUT-EDUCATION.EDUCATIONS').subscribe((education: Education[]) => {
      this.educations.set(education);
    });
  }
}
