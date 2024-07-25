import { Request, Response } from "express";
import { PatientService } from "../../services/patient/patient";
import { IController } from "interfaces/controller";
import { PatientsResponse } from "types/responses/patients-response";
import { StatusCodes } from "http-status-codes";
import { Patient } from "types/models/patient";

export class PatientsController implements IController<PatientsResponse, {}, {}> {
    public async Exec(req: Request, res: Response<PatientsResponse>): Promise<Response> {
        const service: PatientService = new PatientService();

        try {
            const patients: Patient[] = await service.GetPatients.patients();

            return res.status(StatusCodes.OK).json({
                patients: patients
            });
        } catch (error) {
            console.error("[Controller Error]: ", error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                patients: []
            });
        }
    }
}