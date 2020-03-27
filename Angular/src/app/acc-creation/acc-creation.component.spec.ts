import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccCreationComponent } from './acc-creation.component';

describe('AccCreationComponent', () => {
  let component: AccCreationComponent;
  let fixture: ComponentFixture<AccCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
