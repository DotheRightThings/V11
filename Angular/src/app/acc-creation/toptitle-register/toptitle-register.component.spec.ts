import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptitleRegisterComponent } from './toptitle-register.component';

describe('ToptitleRegisterComponent', () => {
  let component: ToptitleRegisterComponent;
  let fixture: ComponentFixture<ToptitleRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToptitleRegisterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptitleRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
