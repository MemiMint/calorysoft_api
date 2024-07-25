import { Application } from "express";
import { SignInController } from "../../controllers/auth/signin";

export class SignInRoute {
    private _app: Application;
    private controller: SignInController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new SignInController();
    }

    public Init() {
        this._app.post("/login", this.controller.Exec);
    }
}