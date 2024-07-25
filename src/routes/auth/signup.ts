import { Application } from "express";
import { SignUpController } from "../../controllers/auth/signup";

export class SignUpRoute {
    private _app: Application;
    private controller: SignUpController;

    constructor(app: Application) {
        this._app = app;
        this.controller = new SignUpController();
    }

    public Init() {
        this._app.post("/signup", this.controller.Exec);
    }
}