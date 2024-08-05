import { Application } from "express";
import { CreateAssistantController } from "../../controllers/assistant/create";

export class CreateAssistantRoute {
    private _app: Application;
    private controller: CreateAssistantController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new CreateAssistantController();
    }

    public Init() {
        this._app.post("/assistant/create", this.controller.Exec);
    }
}