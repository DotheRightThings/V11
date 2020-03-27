import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfundComponent } from './topfund.component';

describe('TopfundComponent', () => {
  let component: TopfundComponent;
  let fixture: ComponentFixture<TopfundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
