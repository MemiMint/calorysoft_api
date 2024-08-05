import { Application } from "express";
import { DeletePatientController } from "../../controllers/patient/delete";

export class DeletePatientRoute {
    private _app: Application;
    private controller: DeletePatientController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new DeletePatientController();
    }

    public Init() {
        this._app.delete("/patient/:id", this.controller.Exec);
    }
}