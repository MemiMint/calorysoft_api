import { NutritionalPlan, WeeklyPlan } from "../../types/models/nutriotional-plan";
import { NutritionalPlanModel } from "../../model/NutritionalPlan";

export class UpdateNutritionalPlan {
    public async update(id: number, data: Partial<NutritionalPlan>): Promise<NutritionalPlan | null> {
        try {
            const np = await NutritionalPlanModel.findOne({ where: { id } });

            np.title = data.title;
            np.description = data.description;
            np.weekly_plans = JSON.stringify(data.weekly_plans);

            await np.save();

            if (!np) return null;

            return np;
        } catch (error) {
            console.error(error);

            return null;
        }
    }
}