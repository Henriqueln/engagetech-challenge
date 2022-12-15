import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabourCostReportRoutingModule } from './labour-cost-report-routing.module';
import { LabourCostReportComponent } from './components/labour-cost-report/labour-cost-report.component';
import { LabourCostReportTableRowComponent } from './components/labour-cost-report-table-row/labour-cost-report-table-row.component';

@NgModule({
  declarations: [
    LabourCostReportComponent,
    LabourCostReportTableRowComponent
  ],
  imports: [
    CommonModule,
    LabourCostReportRoutingModule
  ]
})
export class LabourCostReportModule { }
