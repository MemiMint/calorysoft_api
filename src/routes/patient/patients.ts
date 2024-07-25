import { Application } from "express";
import { PatientsController } from "../../controllers/patient/patients";

export class PatientsRoute {
    private _app: Application;
    private controller: PatientsController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new PatientsController();
    }

    public Init() {
        this._app.get("/patients", this.controller.Exec);
    }
}