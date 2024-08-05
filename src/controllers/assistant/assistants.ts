import { Request, Response } from "express";
import { IController } from "../../interfaces/controller";
import { AssistantService } from "../../services/assistants/assistant";
import { AssistantsResponse } from "../../types/responses/assistants-response";
import { User } from "../../types/models/user";
import { StatusCodes } from "http-status-codes";

export class AssistantsController implements IController<AssistantsResponse> {
    public async Exec(req: Request, res: Response<AssistantsResponse>): Promise<Response> {
        const service: AssistantService = new AssistantService();

        try {
            const assistants: User[] = await service.getAssistants.assistants();

            if (!assistants) {
                return res.status(StatusCodes.NO_CONTENT)
                .json({
                    assistants: []
                });
            }

            return res.status(StatusCodes.OK)
            .json({
                assistants: assistants
            })
        } catch (error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                assistants: []
            });
        }
    }
}