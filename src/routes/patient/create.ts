import { Application } from "express";
import { CreatePatientController } from "../../controllers/patient/create";

export class CreatePatientRoute {
    private _app: Application;
    private controller: CreatePatientController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new CreatePatientController();
    }

    public Init() {
        this._app.post("/patients/create", this.controller.Exec);
    }
}