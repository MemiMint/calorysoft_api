import { NutritionalPlan, WeeklyPlan } from "../../types/models/nutriotional-plan";
import { NutritionalPlanModel } from "../../model/NutritionalPlan";

export class GetNutritionalPlans {
    public async getNutritionalPlans(): Promise<NutritionalPlan[] | null> {
        try {
            const np: NutritionalPlan[] = await NutritionalPlanModel.findAll();

            if (!np) return null;

            return np;
        } catch (error) {
            console.error(error);

            return null;
        }
    }
}