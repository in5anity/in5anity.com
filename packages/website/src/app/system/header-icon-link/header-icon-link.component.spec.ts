import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIconLinkComponent } from './header-icon-link.component';

describe('HeaderIconLinkComponent', () => {
  let component: HeaderIconLinkComponent;
  let fixture: ComponentFixture<HeaderIconLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIconLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIconLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
