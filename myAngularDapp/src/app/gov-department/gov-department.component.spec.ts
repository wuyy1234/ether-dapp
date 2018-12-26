import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovDepartmentComponent } from './gov-department.component';

describe('GovDepartmentComponent', () => {
  let component: GovDepartmentComponent;
  let fixture: ComponentFixture<GovDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
