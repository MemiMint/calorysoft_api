import { Request, Response } from "express";
import { NutritionalPlanService } from "../../services/nutritional-plan/nutritional_plan";
import { StatusCodes } from "http-status-codes";

export class GetNutritionalPlanController {
    public async Exec(req: Request, res: Response): Promise<Response> {
        const service: NutritionalPlanService = new NutritionalPlanService();

        try { 
            const np = await service.getNutritionalPlan.nutritionalplan(parseInt(req.params.id));

            if (!np) {
                return res.status(StatusCodes.NO_CONTENT)
                .json({
                    np: null
                });
            }

            return res.status(StatusCodes.OK)
            .json({
                np
            });
        } 
        
        catch(error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                np: null
            });
        }
    }
}