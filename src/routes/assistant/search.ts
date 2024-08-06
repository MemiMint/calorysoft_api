import { Application } from "express";
import { SearchAssistantController } from "../../controllers/assistant/search";

export class SearchAssistantRoute {
    private _app: Application;
    private controller: SearchAssistantController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new SearchAssistantController;
    }

    public Init() {
        this._app.get("/assistants/:cid", this.controller.Exec);
    }
}