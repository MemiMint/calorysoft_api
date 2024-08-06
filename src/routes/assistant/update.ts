import { Application } from "express";
import { UpdateAssistantController } from "../../controllers/assistant/update";

export class UpdateAssistantRoute {
    private _app: Application;
    private controller: UpdateAssistantController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new UpdateAssistantController();
    }

    public Init() {
        this._app.put("/assistant/update/:uid", this.controller.Exec);
    }
}