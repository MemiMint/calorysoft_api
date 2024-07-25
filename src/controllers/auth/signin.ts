import { Request, Response } from "express";
import { AuthService } from "../../services/auth/auth";
import { IController } from "interfaces/controller";
import { LoginBody } from "../../types/bodies/login-body";
import { AuthResponse } from "../../types/responses/auth-response";
import { StatusCodes } from "http-status-codes";
import { JSONWebTokenHandler } from "../../utils/jwt";


export class SignInController implements IController<AuthResponse, {}, LoginBody> {
    public async Exec(req: Request<{}, {}, LoginBody>, res: Response<AuthResponse>): Promise<Response> {
        const service = new AuthService();
        const jwtHandler: JSONWebTokenHandler = new JSONWebTokenHandler();

        try {
            const account = await service.SignIn.Login(req.body.username, req.body.password);

            if (!account) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    status: StatusCodes.NOT_FOUND,
                    success: true,
                    message: "Usuario no encontrado",
                    token: null
                });
            }
    
            const token: string = jwtHandler.create({
                id: account.id,
                username: account.username,
                firstname: account.firstname,
                lastname: account.lastname,
                uuid: account.uuid,
                role: account.role
            }); 

            return res.status(StatusCodes.OK).json({
                status: StatusCodes.OK,
                success: true,
                message: "Usuario encontrado",
                token: token,
                user: account
            });

            
        } catch (error) {
            console.error("[ERROR CONTROLLER]: ", error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                success: true,
                message: "Hubo un problema interno",
                token: null
            })
        }
    }
    
}