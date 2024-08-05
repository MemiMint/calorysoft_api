import { Application } from "express";
import { DeleteAssistantController } from "../../controllers/assistant/delete";

export class DeleteAssistantRoute {
    private _app: Application;
    private controller: DeleteAssistantController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new DeleteAssistantController();
    }

    public Init() {
        this._app.delete("/assistant/:uid", this.controller.Exec);
    }
}