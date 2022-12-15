/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabourCostReportComponent } from './labour-cost-report.component';

describe('LabourCostReportComponent', () => {
  let component: LabourCostReportComponent;
  let fixture: ComponentFixture<LabourCostReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourCostReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourCostReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
