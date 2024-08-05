import { Application } from "express";
import { PatientController } from "../../controllers/patient/patient";

export class PatientRoute {
    private _app: Application;
    private controller: PatientController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new PatientController();
    }

    public Init() {
        this._app.get("/patient/:id", this.controller.Exec);
    }
}