import { Application } from "express";
import { CreateNutritionalPlanController } from "../../controllers/nutritional-plan/create";

export class CreateNutritionalPlanRoute {
    private _app: Application;
    private controller: CreateNutritionalPlanController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new CreateNutritionalPlanController();
    }

    public Init() {
        this._app.post("/nutritional_plan/create", this.controller.Exec);
    }
}