import { Application } from "express";
import { AssistantController } from "../../controllers/assistant/assistant";

export class AssistantRoute {
    private _app: Application;
    private controller: AssistantController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new AssistantController();
    }

    public Init() {
        this._app.get("/assistant/:uid", this.controller.Exec);
    }
}