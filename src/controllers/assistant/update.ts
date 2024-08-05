import { Request, Response } from "express";
import { IController } from "../../interfaces/controller";
import { AssistantsResponse } from "../../types/responses/assistants-response";
import { User } from "../../types/models/user";
import { StatusCodes } from "http-status-codes";
import { AssistantService } from "../../services/assistants/assistant";
import { CreatePatientResponse } from "../../types/responses/create-patient-response";


export class UpdateAssistantController implements IController<{ message: string, assistant: User }, { uid: string }, User> {
    public async Exec(req: Request<{ uid: string }, {}, User>, res: Response<{ message: string, assistant: User }>): Promise<Response> {
        const service: AssistantService = new AssistantService
        const body = req.body;

        try {
            const newAssistant = await service.updateAssistant.update(req.params.uid, {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                cid: req.body.cid,
                password: req.body.password,
                phonenumber: req.body.phonenumber,
                username: req.body.username,
            });

            

            return res.status(StatusCodes.OK)
            .json({
                message: "El asistente ha sido registrado",
                assistant: newAssistant
            })
        } catch (error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                message: "No se pudo actualizar el asistente",
                assistant: null
            })
        }
    }
}