import { Request, Response } from "express";
import { PatientService } from "../../services/patient/patient";
import { IController } from "../../interfaces/controller";
import { StatusCodes } from "http-status-codes";
import { Patient } from "../../types/models/patient";
import { CreatePatientResponse } from "../../types/responses/create-patient-response";

export class UpdatePatientController implements IController<CreatePatientResponse, { id: number }, Patient> {
    public async Exec(req: Request<{id: number}, {}, Patient>, res: Response<CreatePatientResponse>): Promise<Response> {
        const service: PatientService = new PatientService();

        try {
            const newPatient = await service.UpdatePatient.update(req.params.id, {
                firstname: req.body.firstname,
                age: req.body.age,
                email: req.body.email,
                height: req.body.height,
                lastname: req.body.lastname,
                notes: req.body.notes,
                np_id: req.body.np_id,
                phonenumber: req.body.phonenumber,
                physical_activity: req.body.physical_activity,
                sex: req.body.sex,
                weight: req.body.weight
            });

            if (!newPatient) {
                return res.status(StatusCodes.NO_CONTENT);
            }

            return res.status(StatusCodes.OK).json({
                message: "El paciente ha sido actualizado",
                patient: newPatient
            })
        } catch (error) {
            console.error("[Controller Error]: ", error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Hubo un error al actualizar el paciente",
                patient: null
            });
        }
    }
}