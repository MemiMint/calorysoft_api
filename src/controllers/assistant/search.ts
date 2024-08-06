import { Request, Response } from "express";
import { IController } from "../../interfaces/controller";
import { AssistantService } from "../../services/assistants/assistant";
import { AssistantParam } from "../../types/params/assistant-param";
import { StatusCodes } from "http-status-codes";
import { AssistantResponse } from "../../types/responses/assistant-response";

export class SearchAssistantController  {
    public async Exec(req: Request, res: Response): Promise<Response> {
        const service: AssistantService = new AssistantService();

        try {
            const assistants = await service.searchAssistant.search(req.params.cid);

            return res.status(StatusCodes.OK)
            .json({
                assistants: assistants
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