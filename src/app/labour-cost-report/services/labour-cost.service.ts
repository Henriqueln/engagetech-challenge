import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LabourCostReportModel } from '../models/labour-cost-report';
import { LabourCostModel } from '../models/labour-cost';

@Injectable({
  providedIn: 'root'
})
export class LabourCostService {

  constructor(private http: HttpClient) { }

  getLabourCosts(): Observable<LabourCostReportModel> {
    const url = 'http://localhost:6502/application/labourstats';
    return this.http.get<LabourCostReportModel[]>(url).pipe(map(labourCosts => this.mapLabourCosts(labourCosts[0])));
  }

  mapLabourCosts(labourCosts: LabourCostReportModel): LabourCostReportModel {
    labourCosts.directContractors = this.convertToPounds(labourCosts.directContractors, labourCosts.total[0].workerCount);
    labourCosts.providers = this.convertToPounds(labourCosts.providers, labourCosts.total[0].workerCount);
    labourCosts.total = this.convertToPounds(labourCosts.total, labourCosts.total[0].workerCount);
    return {
      ...labourCosts,
      allProviders: [...labourCosts?.directContractors, ...labourCosts?.providers],
    }
  }

  convertToPounds(model: LabourCostModel[], totalWorkers: number): LabourCostModel[] {
    return model.map(contractor => {
      contractor.grossPayTotal = contractor.grossPayTotal / 100;
      contractor.labourCostTotal = contractor.labourCostTotal / 100;
      contractor.workForce = (contractor?.workerCount * 100) / totalWorkers;
      return contractor;
    });
  }

}
