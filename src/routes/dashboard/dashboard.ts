import { Application } from "express";
import { DashboardController } from "../../controllers/dashboard/dashboard";

export class DashboardRoute {
    private _app: Application;
    private controller: DashboardController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new DashboardController();
    }

    public Init() {
        this._app.get("/dashboard", this.controller.Exec);
    }
}