import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherIComponent } from './other-i.component';

describe('OtherIComponent', () => {
  let component: OtherIComponent;
  let fixture: ComponentFixture<OtherIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
