import { Request, Response } from "express";
import { IController } from "../../interfaces/controller";
import { AdminExistsResponse } from "../../types/responses/admin-exists-response";
import { StatusCodes } from "http-status-codes";
import { AdminService } from "../../services/admin";

export class AdminExistsController implements IController<AdminExistsResponse, {}, {}> {
    async Exec(req: Request<{}, {}, {}>, res: Response<AdminExistsResponse>): Promise<Response> {
        const service = new AdminService();
    
        try {
            const exists: boolean = await service.AdminExists.DoesAdminExists();

            if (exists) {
                return res.status(StatusCodes.OK).json({
                    doesExists: exists
                });
            }

            return res.status(StatusCodes.OK).json({
                doesExists: exists
            });
        } catch (error) {
            console.error("[CONTROLLER ERROR]: ", error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                doesExists: false
            });
        }
    }
}