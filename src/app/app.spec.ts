import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { App } from './app';

describe('App', () => {
  let mockTranslateService: Partial<TranslateService>;

  beforeEach(async () => {
    mockTranslateService = {
      get: (key: string) => of(key),
      instant: (key: string) => key,
      addLangs: (key: string[]) => {},
    };

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: TranslateService, useValue: mockTranslateService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
