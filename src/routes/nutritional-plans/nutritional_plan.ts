import { Application } from "express";
import { GetNutritionalPlanController } from "../../controllers/nutritional-plan/nutritional-plan";

export class GetNutritionalPlanRoute {
    private _app: Application;
    private controller: GetNutritionalPlanController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new GetNutritionalPlanController();
    }

    public Init() {
        this._app.get("/nutritional_plan/:id", this.controller.Exec);
    }
}