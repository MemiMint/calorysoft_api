import { Request, Response } from "express";
import { IController } from "../../interfaces/controller";
import { PatientService } from "../../services/patient/patient";
import { AssistantParam } from "../../types/params/assistant-param";
import { StatusCodes } from "http-status-codes";
import { AssistantResponse } from "../../types/responses/assistant-response";

export class SearchPatientController  {
    public async Exec(req: Request, res: Response): Promise<Response> {
        const service: PatientService = new PatientService();

        try {
            const patients = await service.SearchPatients.search(req.params.name);

            return res.status(StatusCodes.OK)
            .json({
                patients: patients
            });
        } catch (error) {
            console.error(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                patients: null
            });
        }
    }
}