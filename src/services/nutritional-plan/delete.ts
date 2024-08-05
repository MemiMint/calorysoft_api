import { NutritionalPlan, WeeklyPlan } from "../../types/models/nutriotional-plan";
import { NutritionalPlanModel } from "../../model/NutritionalPlan";

export class DeleteNutritionalPlan {
    public async delete(id: number): Promise<NutritionalPlan | null> {
        try {
            const np = await NutritionalPlanModel.findOne({ where: {
                id
            } })

            await np.destroy();

            if (!np) return null;

            return np;
        } catch (error) {
            console.error(error);

            return null;
        }
    }
}