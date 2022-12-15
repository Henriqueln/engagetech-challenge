import { Component, Input, OnInit } from '@angular/core';
import { ColumnsEnum } from '../../models/enum/columns.enum';
import { LabourCostModel } from '../../models/labour-cost';

@Component({
  selector: 'tr[app-labour-cost-report-table-row]',
  templateUrl: './labour-cost-report-table-row.component.html',
  styleUrls: ['./labour-cost-report-table-row.component.sass']
})
export class LabourCostReportTableRowComponent implements OnInit {
  @Input() labourCost: LabourCostModel | undefined;
  @Input() currentColumn: ColumnsEnum | undefined;
  @Input() isTotal = false;

  columnsEnum = ColumnsEnum;

  constructor() { }

  ngOnInit() {
  }

}
