import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BuiAccordion, BuiAccordionItem } from '@bianchi-ui';
import { TranslatePipe } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../@common/components/section-title/section-title.component';

export interface Experience {
  company: string;
  role: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

@Component({
  selector: 'app-about-experience',
  templateUrl: './about-experience.html',
  styleUrls: ['./about-experience.scss'],
  imports: [TranslatePipe, DatePipe, SectionTitleComponent, BuiAccordion, BuiAccordionItem],
})
export class AboutExperience {
  experiences: Experience[] = [
    {
      company: 'Selbetti Tecnologia',
      role: 'Frontend Developer (Angular)',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      description: '',
    },
    {
      company: 'Informa Solutions',
      role: 'Frontend Developer (Angular)',
      startDate: new Date('2023-01-01'),
      endDate: new Date('2024-12-31'),
      description: '',
    },
    {
      company: 'Integrativa',
      role: 'Fullstack Developer (.NET Core / Angular)',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2024-12-31'),
      description: '',
    },
    {
      company: 'Maquinaweb',
      role: 'Fullstack Developer (PHP)',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2024-12-31'),
      description: '',
    },
  ];
}
