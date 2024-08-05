import { Request, Response } from "express";
import { NutritionalPlanService } from "../../services/nutritional-plan/nutritional_plan";
import { StatusCodes } from "http-status-codes";

export class DeleteNutritionalPlanController {
    public async Exec(req: Request, res: Response): Promise<Response> {
        const service: NutritionalPlanService = new NutritionalPlanService();

        try { 
            const np = await service.deleteNutritionalPlan.delete(parseInt(req.params.id));

            if (!np) {
                return res.status(StatusCodes.NO_CONTENT)
                .json({
                    message: "No se encontro el recurso",
                    np: null
                });
            }

            return res.status(StatusCodes.OK)
            .json({
                message: "Se ha eliminado el plan nutricional",
                np
            });
        } 
        
        catch(error) {
            console.error(error);

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                message: "No se pudo eliminar el recurso",
                np: null
            });
        }
    }
}