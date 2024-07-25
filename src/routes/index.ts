import { Application } from "express";
import { IRoute } from "interfaces/route";
import { SignInRoute, SignUpRoute } from "./auth/";
import { AdminExistsRoute } from "./admin";
import { MeRoute } from "./auth/me";
import { CreatePatientRoute, PatientsRoute } from "./patient";


export class RouterHandler {
    private readonly _app: Application;
    private readonly routes: IRoute[];

    constructor(app: Application) {
        this._app = app;

        this.routes = [
            new SignInRoute(app),
            new SignUpRoute(app),
            new MeRoute(app),
            new AdminExistsRoute(app),
            new PatientsRoute(app),
            new CreatePatientRoute(app)
        ]
    }

    public InitializeRoutes(): void {
        this.routes.map((route, index) => {
            route.Init();
        });
    }
}