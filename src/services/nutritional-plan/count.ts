import { NutritionalPlanModel } from "../../model/NutritionalPlan";

export const totalNPCount = async (): Promise<number> => await NutritionalPlanModel.count();