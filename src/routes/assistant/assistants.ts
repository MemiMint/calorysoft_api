import { Application } from "express";
import { AssistantsController } from "../../controllers/assistant/assistants";

export class AssistantsRoute {
    private _app: Application;
    private controller: AssistantsController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new AssistantsController();
    }

    public Init() {
        this._app.get("/assistants", this.controller.Exec);
    }
}