import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccReviewComponent } from './acc-review.component';

describe('AccReviewComponent', () => {
  let component: AccReviewComponent;
  let fixture: ComponentFixture<AccReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
