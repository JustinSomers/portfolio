import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorDesignComponent } from './senior-design.component';

describe('SeniorDesignComponent', () => {
  let component: SeniorDesignComponent;
  let fixture: ComponentFixture<SeniorDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
