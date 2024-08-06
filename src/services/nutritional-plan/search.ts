import { NutritionalPlan, WeeklyPlan } from "../../types/models/nutriotional-plan";
import { NutritionalPlanModel } from "../../model/NutritionalPlan";

export class SearchNutritionalPlans {
    public async search(title: string): Promise<NutritionalPlan[] | null> {
        try {
            const nps: NutritionalPlan[] = await NutritionalPlanModel.findAll({
                where: {
                    title: title
                }
            });

            if (!nps) return null;

            return nps;
        } catch (error) {
            console.error(error);

            return null;
        }
    }
}