import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpre394Component } from './cpre394.component';

describe('Cpre394Component', () => {
  let component: Cpre394Component;
  let fixture: ComponentFixture<Cpre394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cpre394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpre394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
