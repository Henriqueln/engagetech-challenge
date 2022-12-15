import { LabourCostModel } from "./labour-cost";

export interface LabourCostReportModel {
    directContractors: LabourCostModel[];
    providers: LabourCostModel[];
    allProviders: LabourCostModel[];
    total: LabourCostModel[];
}