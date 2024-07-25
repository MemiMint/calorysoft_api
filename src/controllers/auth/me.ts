import { Request, Response } from "express";
import { IController } from "interfaces/controller";
import { StatusCodes } from "http-status-codes";
import { JSONWebTokenHandler } from "../../utils/jwt";

type MeResponse = {
    uuid: string;
    username: string;
    firstname: string;
    lastname: string;
    role: number;
}

export class MeController implements IController<MeResponse, {}, {}> {
    public async Exec(req: Request<{}, {}, {}>, res: Response<MeResponse>): Promise<Response> {
        const jwtHandler: JSONWebTokenHandler = new JSONWebTokenHandler();

        const token: string = req.headers.authorization.split(" ")[1];

        try {
            const payload = jwtHandler.getPayload(token);

            return res.status(StatusCodes.OK).json({
                uuid: payload.uuid,
                firstname: payload.firstname,
                lastname: payload.lastname,
                username: payload.username,
                role: payload.role
            });
        }

        catch (error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                uuid: "",
                firstname: "",
                lastname: "",
                username: "",
                role: 0
            });
        }
    }
}