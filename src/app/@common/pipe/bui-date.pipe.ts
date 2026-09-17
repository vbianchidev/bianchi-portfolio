// app-date.pipe.ts
import { formatDate } from '@angular/common';
import { Pipe, PipeTransform, inject } from '@angular/core';
import { LocaleService } from '../services/localization.service';

@Pipe({
  name: 'buiDate',
  standalone: true,
  pure: false, // precisa reavaliar quando o locale mudar
})
export class BuiDatePipe implements PipeTransform {
  private localeService = inject(LocaleService);

  transform(value: Date | string | number | null | undefined, format = 'mediumDate'): string {
    if (value == null) return '';
    return formatDate(value, format, this.localeService.angularLocaleId());
  }
}
