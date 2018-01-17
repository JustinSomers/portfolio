import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsBootstrapWorkingComponent } from './is-bootstrap-working.component';

describe('IsBootstrapWorkingComponent', () => {
  let component: IsBootstrapWorkingComponent;
  let fixture: ComponentFixture<IsBootstrapWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsBootstrapWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsBootstrapWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
