import { Component, OnInit } from '@angular/core';
import { ColumnsEnum } from '../../models/enum/columns.enum';
import { LabourCostReportModel } from '../../models/labour-cost-report';
import { LabourCostService } from '../../services/labour-cost.service';

@Component({
  selector: 'app-labour-cost-report',
  templateUrl: './labour-cost-report.component.html',
  styleUrls: ['./labour-cost-report.component.sass']
})
export class LabourCostReportComponent implements OnInit {

  constructor(private labourCostService: LabourCostService) { }

  labourCostReport: LabourCostReportModel | undefined;
  sortingColumn = ColumnsEnum.PAYROLL_PROVIDER;
  isSortingAsc = true;
  columnsEnum = ColumnsEnum;

  ngOnInit() {
    this.getLabourCosts();
  }

  getLabourCosts(): void {
    this.labourCostService.getLabourCosts().subscribe(
      result => {
        this.labourCostReport = result;
        this.sortData();
      }
    )
  }

  sortData(): void {
    if (this.sortingColumn === ColumnsEnum.PAYROLL_PROVIDER) {
      this.labourCostReport?.providers.sort((a, b) => {
        if (this.isSortingAsc) return a.name.localeCompare(b.name)
        return b.name.localeCompare(a.name)
      })
    } else if (this.sortingColumn === ColumnsEnum.WORKER) {
      this.labourCostReport?.allProviders.sort((a, b) => {
        if (!this.isSortingAsc) return a?.workerCount - b?.workerCount;
        return b?.workerCount - a?.workerCount;
      });
    } else if (this.sortingColumn === ColumnsEnum.COMPLIANCE) {
      this.labourCostReport?.allProviders.sort((a, b) => {
        let complianceA = 0;
        let complianceB = 0;
        if (a?.complianceStats?.Total != undefined) complianceA = a?.complianceStats?.Total;
        if (b?.complianceStats?.Total != undefined) complianceB = b?.complianceStats?.Total;
        if (!this.isSortingAsc) return complianceA - complianceB;
        return complianceB - complianceA;
      });
    } else if (this.sortingColumn === ColumnsEnum.GROSS_PAY) {
      this.labourCostReport?.allProviders.sort((a, b) => {
        if (!this.isSortingAsc) return a?.grossPayTotal - b?.grossPayTotal;
        return b?.grossPayTotal - a?.grossPayTotal;
      });
    } else if (this.sortingColumn === ColumnsEnum.PAYROLL_ADMIN) {
      this.labourCostReport?.allProviders.sort((a, b) => {
        if (!this.isSortingAsc) return a?.payrollAdminTotal - b?.payrollAdminTotal;
        return b?.payrollAdminTotal - a?.payrollAdminTotal;
      });
    } else if (this.sortingColumn === ColumnsEnum.LABOUR_COST) {
      this.labourCostReport?.allProviders.sort((a, b) => {
        if (!this.isSortingAsc) return a?.labourCostTotal - b?.labourCostTotal;
        return b?.labourCostTotal - a?.labourCostTotal;
      });
    } else if (this.sortingColumn === ColumnsEnum.WORKFORCE) {
      this.labourCostReport?.allProviders.sort((a, b) => {
        if (!this.isSortingAsc) return a?.workForce - b?.workForce;
        return b?.workForce - a?.workForce;
      });
    }
  }

  onClickHeader(column: ColumnsEnum): void {
    if (this.sortingColumn === column) {
      this.isSortingAsc = !this.isSortingAsc;
    } else {
      this.sortingColumn = column;
      this.isSortingAsc = true;
    }
    this.sortData();
  }

  getArrowClass(): string {
    if (this.isSortingAsc) return 'fa-solid fa-chevron-down';
    return 'fa-solid fa-chevron-up';
  }
}
