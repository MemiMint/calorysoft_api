import { Request, Response } from "express";
import { PatientService } from "../../services/patient/patient";
import { IController } from "../../interfaces/controller";
import { StatusCodes } from "http-status-codes";
import { Patient } from "../../types/models/patient";
import { PatientParams } from "../../types/params/patient-params";
import { PatientResponse } from "../../types/responses/patient-response";

export class PatientController implements IController<PatientResponse, PatientParams, {}> {
    public async Exec(req: Request<PatientParams>, res: Response<PatientResponse>): Promise<Response> {
        const service: PatientService = new PatientService();

        try {
            const patient: Patient = await service.GetPatientById.getPatient(req.params.id);

        
            return res.status(StatusCodes.OK).json({    
                patient
            });
        } catch (error) {
            console.error("[Controller Error]: ", error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                patient: null
            });
        }
    }
}