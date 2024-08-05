import { Request, Response } from "express";
import { NutritionalPlanService } from "../../services/nutritional-plan/nutritional_plan";
import { StatusCodes } from "http-status-codes";

export class GetNutritionalPlansController {
    public async Exec(req: Request, res: Response): Promise<Response> {
        const service: NutritionalPlanService = new NutritionalPlanService();

        try { 
            const nps = await service.getNutritionalPlans.getNutritionalPlans();

            if (!nps) {
                return res.status(StatusCodes.NO_CONTENT)
                .json({
                    nps: []
                });
            }

            return res.status(StatusCodes.OK)
            .json({
                nps
            });
        } 
        
        catch(error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                np: []
            });
        }
    }
}