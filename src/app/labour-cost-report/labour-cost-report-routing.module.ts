import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabourCostReportComponent } from './components/labour-cost-report/labour-cost-report.component';

const routes: Routes = [
    {
        path: 'labour-cost', component: LabourCostReportComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LabourCostReportRoutingModule { }
