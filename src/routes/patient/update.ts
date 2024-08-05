import { Application } from "express";
import { UpdatePatientController } from "../../controllers/patient/update";

export class UpdatePatientRoute {
    private _app: Application;
    private controller: UpdatePatientController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new UpdatePatientController();
    }

    public Init() {
        this._app.put("/patient/:id", this.controller.Exec);
    }
}