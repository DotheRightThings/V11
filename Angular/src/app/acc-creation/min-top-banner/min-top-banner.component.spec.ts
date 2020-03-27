import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTopBannerComponent } from './min-top-banner.component';

describe('MinTopBannerComponent', () => {
  let component: MinTopBannerComponent;
  let fixture: ComponentFixture<MinTopBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinTopBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
