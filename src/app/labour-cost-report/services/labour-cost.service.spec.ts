/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LabourCostService } from './labour-cost.service';

describe('Service: LabourCost', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabourCostService]
    });
  });

  it('should ...', inject([LabourCostService], (service: LabourCostService) => {
    expect(service).toBeTruthy();
  }));
});
