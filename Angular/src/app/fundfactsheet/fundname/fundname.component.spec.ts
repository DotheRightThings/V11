import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundnameComponent } from './fundname.component';

describe('FundnameComponent', () => {
  let component: FundnameComponent;
  let fixture: ComponentFixture<FundnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
