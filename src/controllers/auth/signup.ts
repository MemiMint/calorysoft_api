import { Request, Response } from "express";
import { AuthService } from "../../services/auth/auth";
import { IController } from "../../interfaces/controller";
import { User } from "../../types/models/user";
import { AuthResponse } from "../../types/responses/auth-response";
import { StatusCodes } from "http-status-codes";
import { JSONWebTokenHandler } from "../../utils/jwt";

export class SignUpController implements IController<AuthResponse, {}, User> {
    public async Exec(req: Request<{}, {}, User>, res: Response<AuthResponse>): Promise<Response> {
        const service: AuthService = new AuthService();
        const jwtHandler: JSONWebTokenHandler = new JSONWebTokenHandler();

        try {
            const newAccount: User | null = await service.SignUp.Register(
                req.body.firstname,
                req.body.lastname,
                req.body.cid,
                req.body.username,
                req.body.password,
                req.body.role
            );

            const token = jwtHandler.create({
                id: newAccount.id,
                username: newAccount.username,
                uuid: newAccount.uuid,
                firstname: newAccount.firstname,
                lastname: newAccount.lastname,
                role: newAccount.role,
            })

            if (!newAccount) {
                res.status(StatusCodes.BAD_REQUEST)
                .json({
                    status: StatusCodes.BAD_REQUEST,
                    success: false,
                    message: "Algunos datos no fueron proporcionados.",
                    token: null
                });
            }

            return res.status(StatusCodes.OK).json({
                status: StatusCodes.OK,
                success: true,
                message: "El usuario se ha registrado correctamente",
                token: token
            })

        } catch (error) {
            console.error("[ERROR CONTROLLER]: ", error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                success: false,
                message: "Hubo un problema interno",
                token: null
            });
        }
    }
}