import { Request, Response } from "express";
import { NutritionalPlanService } from "../../services/nutritional-plan/nutritional_plan";
import { StatusCodes } from "http-status-codes";

export class UpdateNutritionalPlanController {
    public async Exec(req: Request, res: Response): Promise<Response> {
        const service: NutritionalPlanService = new NutritionalPlanService();

        try { 
            const np = await service.updateNutritionalPlan.update(parseInt(req.params.id), {
                title: req.body.title,
                description: req.body.description,
                weekly_plans: req.body.weekly_plans
            })

            if (!np) {
                return res.status(StatusCodes.NO_CONTENT)
                .json({
                    message: "No se encontro el recurso",
                    np: null
                });
            }

            return res.status(StatusCodes.OK)
            .json({
                message: "Se actualizo el plan nutricional",
                np
            });
        } 
        
        catch(error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                message: "Ocurrio un problema al actualizar",
                np: null
            });
        }
    }
}