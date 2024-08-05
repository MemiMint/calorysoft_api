import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { totalAssistantCount } from "../../services/assistants/count";
import { totalNPCount } from "../../services/nutritional-plan/count";
import { totalPatientCount } from "../../services/patient/count";
import { PatientService } from "../../services/patient/patient";
import { Patient } from "../../types/models/patient";

export class DashboardController {
    public async Exec(req: Request, res: Response): Promise<Response> {
        const service = new PatientService();

        try {
            const patientCount: number = await totalPatientCount();
            const assistantCount: number = await totalAssistantCount();
            const npCount: number = await totalNPCount();
            const lastRecord: Patient | null = await service.LastPatient.lastPatient();

            return res.status(StatusCodes.OK)
            .json({
                totalPatientRecordCount: patientCount,
                totalAssistantRecordCount: assistantCount,
                totalNPRecordCount: npCount,
                lastPatient: lastRecord
            })
        } 
        
        catch(error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(null);
        }
    }
}