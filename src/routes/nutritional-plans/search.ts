import { Application } from "express";
import { SearchNutritionalPlanController } from "../../controllers/nutritional-plan/search";

export class SearchNutritionalPlansRoute {
    private _app: Application;
    private controller: SearchNutritionalPlanController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new SearchNutritionalPlanController();
    }

    public Init() {
        this._app.get("/nutritional_plans/:title", this.controller.Exec);
    }
}