import { Request, Response } from "express";
import { PatientService } from "../../services/patient/patient";
import { IController } from "interfaces/controller";
import { StatusCodes } from "http-status-codes";
import { Patient } from "types/models/patient";
import { CreatePatientResponse } from "types/responses/create-patient-response";

export class CreatePatientController implements IController<CreatePatientResponse, {}, Patient> {
    public async Exec(req: Request<{}, {}, Patient>, res: Response<CreatePatientResponse>): Promise<Response> {
        const service: PatientService = new PatientService();

        try {
            const newPatient = await service.CreatePatient.Create(
                req.body.firstname,
                req.body.lastname,
                req.body.sex,
                req.body.age,
                req.body.height,
                req.body.physical_activity.toString(),
                req.body.weight,
                req.body.np_id,
                req.body.email,
                req.body.notes
            );

            if (!newPatient) {
                return res.status(StatusCodes.NO_CONTENT);
            }

            return res.status(StatusCodes.OK).json({
                message: "El paciente ha sido registrado",
                patient: newPatient
            })
        } catch (error) {
            console.error("[Controller Error]: ", error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Hubo un error al registrar el paciente",
                patient: null
            });
        }
    }
}