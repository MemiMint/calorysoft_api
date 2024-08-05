import { NutritionalPlan, WeeklyPlan } from "../../types/models/nutriotional-plan";
import { NutritionalPlanModel } from "../../model/NutritionalPlan";

export class GetNutritionalPlan {
    public async nutritionalplan(id: number): Promise<NutritionalPlan | null> {
        try {
            const np: NutritionalPlan = await NutritionalPlanModel.findOne({ where: { id } });

            if (!np) return null;

            return np
        } catch (error) {
            console.error(error);

            return null;
        }
    }
}