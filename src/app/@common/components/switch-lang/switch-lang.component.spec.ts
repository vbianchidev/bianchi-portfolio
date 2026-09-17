import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchThemeComponent } from './switch-lang.component';

describe('Switch Theme Component', () => {
  let component: SwitchThemeComponent;
  let fixture: ComponentFixture<SwitchThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchThemeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchThemeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
