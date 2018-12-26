import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralGovComponent } from './central-gov.component';

describe('CentralGovComponent', () => {
  let component: CentralGovComponent;
  let fixture: ComponentFixture<CentralGovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralGovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
