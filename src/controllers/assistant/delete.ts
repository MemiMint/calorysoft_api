import { Request, Response } from "express";
import { IController } from "../../interfaces/controller";
import { AssistantService } from "../../services/assistants/assistant";
import { User } from "../../types/models/user";
import { StatusCodes } from "http-status-codes";

export class DeleteAssistantController implements IController<{ message: string, assistant: User }, { uid: string }> {
    public async Exec(req: Request<{ uid: string; }>, res: Response<{ message: string; assistant: User; }>): Promise<Response> {
        const service: AssistantService = new AssistantService();

        try {
            const assistant: User = await service.deleteAssistant.delete(req.params.uid);

            if (!assistant) {
                return res.status(StatusCodes.NOT_FOUND)
                .json({
                    message: "Asistente vacio",
                    assistant: null
                });
            }

            return res.status(StatusCodes.OK)
            .json({
                message: "El asistente ha sido eliminado",
                assistant: assistant
            })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                message: "No se pudo eliminar el asistente",
                assistant: null
            });
        }
    }
}