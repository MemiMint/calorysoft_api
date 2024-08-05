import { Application } from "express";
import { DeleteNutritionalPlanController } from "../../controllers/nutritional-plan/delete";

export class DeleteNutritionalPlanRoute {
    private _app: Application;
    private controller: DeleteNutritionalPlanController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new DeleteNutritionalPlanController();
    }

    public Init() {
        this._app.delete("/nutritional_plan/delete/:id", this.controller.Exec);
    }
}