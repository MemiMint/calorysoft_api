import { NutritionalPlan, WeeklyPlan } from "../../types/models/nutriotional-plan";
import { NutritionalPlanModel } from "../../model/NutritionalPlan";

export class CreateNutritionalPlan {
    public async create(title: string, description: string, weekly_plans: WeeklyPlan[]): Promise<NutritionalPlan | null> {
        try {
            const np: NutritionalPlan = await NutritionalPlanModel.create({
                title: title,
                description: description,
                weekly_plans: JSON.stringify(weekly_plans)
            });

            if (!np) return null;

            return np;
        } catch (error) {
            console.error(error);

            return null;
        }
    }
}