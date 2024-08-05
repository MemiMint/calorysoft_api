import { Request, Response } from "express";
import { IController } from "../../interfaces/controller";
import { User } from "../../types/models/user";
import { StatusCodes } from "http-status-codes";
import { AuthResponse } from "../../types/responses/auth-response";
import { AuthService } from "../../services/auth/auth";

export class CreateAssistantController implements IController<AuthResponse, {}, User> {
    public async Exec(req: Request<{}, {}, User>, res: Response<AuthResponse>): Promise<Response> {
        const service: AuthService = new AuthService();
        const body = req.body;

        try {
            const newAssistant = await service.SignUp.Register(
                body.firstname,
                body.lastname,
                body.cid,
                body.username,
                body.password,
                0,
                req.body.phonenumber
            );

            

            return res.status(StatusCodes.OK)
            .json({
                status: 200,
                success: true,
                message: "El asistente ha sido registrado",
                token: null
            })
        } catch (error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: 500,
                success: false,
                message: "No se puedo crear el asistente",
                token: null
            })
        }
    }
}