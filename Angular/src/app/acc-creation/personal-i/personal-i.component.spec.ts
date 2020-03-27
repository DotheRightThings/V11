import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalIComponent } from './personal-i.component';

describe('PersonalIComponent', () => {
  let component: PersonalIComponent;
  let fixture: ComponentFixture<PersonalIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
