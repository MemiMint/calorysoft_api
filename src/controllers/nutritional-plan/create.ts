import { Request, Response } from "express";
import { NutritionalPlanService } from "../../services/nutritional-plan/nutritional_plan";
import { StatusCodes } from "http-status-codes";

export class CreateNutritionalPlanController {
    public async Exec(req: Request, res: Response): Promise<Response> {
        const service: NutritionalPlanService = new NutritionalPlanService();

        try { 
            const np = await service.createNutritionalPlan.create(
                req.body.title,
                req.body.description,
                req.body.weekly_plans
            )

            if (!np) {
                return res.status(StatusCodes.NO_CONTENT)
                .json({
                    message: "no se ha podido crear el plan nutricional",
                    np
                });
            }

            return res.status(StatusCodes.OK)
            .json({
                message: "Se ha creado el plan nutricional",
                np
            });
        } 
        
        catch(error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                message: "No se ha podido crear el plan nutricional",
                np: null
            });
        }
    }
}