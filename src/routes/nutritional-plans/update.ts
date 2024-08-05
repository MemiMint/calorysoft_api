import { Application } from "express";
import { UpdateNutritionalPlanController } from "../../controllers/nutritional-plan/update";

export class UpdateNutritionalPlanRoute {
    private _app: Application;
    private controller: UpdateNutritionalPlanController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new UpdateNutritionalPlanController();
    }

    public Init() {
        this._app.put("/nutritional_plan/update/:id", this.controller.Exec);
    }
}