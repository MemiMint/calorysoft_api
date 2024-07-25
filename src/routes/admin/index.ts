import { AdminExistsController } from "../../controllers/admin/admin-exists";
import { Application } from "express";

export class AdminExistsRoute {
    private _app: Application;
    private controller: AdminExistsController;

    constructor(app: Application) {
        this._app = app;

        this.controller = new AdminExistsController();
    }

    Init() {
        this._app.get("/admin/exists", this.controller.Exec);
    }
}