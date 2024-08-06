import { CreateNutritionalPlan } from "./create";
import { DeleteNutritionalPlan } from "./delete";
import { GetNutritionalPlan } from "./get";
import { GetNutritionalPlans } from "./nutritional-plans";
import { SearchNutritionalPlans } from "./search";
import { UpdateNutritionalPlan } from "./update";

export class NutritionalPlanService {
    public createNutritionalPlan: CreateNutritionalPlan;
    public deleteNutritionalPlan: DeleteNutritionalPlan;
    public getNutritionalPlan: GetNutritionalPlan;
    public getNutritionalPlans: GetNutritionalPlans;
    public updateNutritionalPlan: UpdateNutritionalPlan;
    public searchNutritionalPlan: SearchNutritionalPlans;

    constructor() {
        this.createNutritionalPlan = new CreateNutritionalPlan();
        this.deleteNutritionalPlan = new DeleteNutritionalPlan();
        this.getNutritionalPlan = new GetNutritionalPlan();
        this.getNutritionalPlans = new GetNutritionalPlans()
        this.updateNutritionalPlan = new UpdateNutritionalPlan();
        this.searchNutritionalPlan = new SearchNutritionalPlans();
    }
}