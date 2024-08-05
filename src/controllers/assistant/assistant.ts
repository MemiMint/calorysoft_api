import { Request, Response } from "express";
import { IController } from "../../interfaces/controller";
import { AssistantService } from "../../services/assistants/assistant";
import { AssistantParam } from "../../types/params/assistant-param";
import { StatusCodes } from "http-status-codes";
import { AssistantResponse } from "../../types/responses/assistant-response";

export class AssistantController implements IController<AssistantResponse, AssistantParam> {
    public async Exec(req: Request<AssistantParam>, res: Response<AssistantResponse>): Promise<Response> {
        const service: AssistantService = new AssistantService();

        try {
            const assistant = await service.getAssistant.assistant(req.params.uid);

            return res.status(StatusCodes.OK)
            .json({
                assistant: assistant
            });
        } catch (error) {
            console.error(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                assistant: null
            });
        }
    }
}