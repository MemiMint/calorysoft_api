import { Application } from "express";
import { SearchPatientController } from "../../controllers/patient/search";

export class SearchPatientsRoute {
    private _app: Application;
    private controller: SearchPatientController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new SearchPatientController();
    }

    public Init() {
        this._app.get("/patients/:name", this.controller.Exec);
    }
}