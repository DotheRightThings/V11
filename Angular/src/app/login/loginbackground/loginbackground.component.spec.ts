import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbackgroundComponent } from './loginbackground.component';

describe('LoginbackgroundComponent', () => {
  let component: LoginbackgroundComponent;
  let fixture: ComponentFixture<LoginbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginbackgroundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
