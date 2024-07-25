import { Application } from "express";
import { MeController } from "../../controllers/auth/me";

export class MeRoute {
    private _app: Application;
    private controller: MeController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new MeController();
    }

    public Init() {
        this._app.get("/me", this.controller.Exec);
    }
}