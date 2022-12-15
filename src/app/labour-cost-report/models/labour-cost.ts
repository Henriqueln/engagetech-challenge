import { ComplianceStats } from "./compliance-stats";

export interface LabourCostModel {
    complianceStats: ComplianceStats;
    grossPayTotal: number;
    labourCostTotal: number;
    name: string;
    payrollAdminTotal: number;
    providerId: number;
    rebatesTotal: number;
    workerCount: number;
    workForce: number;
}