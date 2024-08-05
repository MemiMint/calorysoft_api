export type WeeklyPlan = {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}

export type NutritionalPlan = {
    title: string;
    description: string;
    weekly_plans: string;
}