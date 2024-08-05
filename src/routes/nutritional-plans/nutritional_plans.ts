import { Application } from "express";
import { GetNutritionalPlansController } from "../../controllers/nutritional-plan/nutritional-plans";

export class GetNutritionalPlansRoute {
    private _app: Application;
    private controller: GetNutritionalPlansController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new GetNutritionalPlansController();
    }

    public Init() {
        this._app.get("/nutritional_plans", this.controller.Exec);
    }
}