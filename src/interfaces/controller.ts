import { Request, Response } from "express";

export interface IController<ResponseBody, RequestParams = {}, RequestBody = {}> {
    Exec(req: Request<RequestParams, {}, RequestBody>, res: Response<ResponseBody>): Promise<Response>;
}