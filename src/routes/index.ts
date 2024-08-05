import { Application } from "express";
import { IRoute } from "interfaces/route";
import { SignInRoute, SignUpRoute } from "./auth/";
import { AdminExistsRoute } from "./admin";
import { MeRoute } from "./auth/me";
import { CreatePatientRoute, PatientsRoute, DeletePatientRoute, PatientRoute, UpdatePatientRoute } from "./patient";
import { AssistantRoute } from "./assistant/asistant";
import { AssistantsRoute } from "./assistant/assistants";
import { CreateAssistantRoute } from "./assistant/create";
import { DeleteAssistantRoute } from "./assistant/delete";
import { UpdateAssistantRoute } from "./assistant/update";
import { DashboardRoute } from "./dashboard/dashboard";
import { CreateNutritionalPlanRoute, DeleteNutritionalPlanRoute, GetNutritionalPlanRoute, GetNutritionalPlansRoute, UpdateNutritionalPlanRoute } from "./nutritional-plans";


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
            new CreatePatientRoute(app),
            new PatientRoute(app),
            new DeletePatientRoute(app),
            new UpdatePatientRoute(app),
            new AssistantRoute(app),
            new AssistantsRoute(app),
            new CreateAssistantRoute(app),
            new DeleteAssistantRoute(app),
            new UpdateAssistantRoute(app),
            new CreateNutritionalPlanRoute(app),
            new DeleteNutritionalPlanRoute(app),
            new UpdateNutritionalPlanRoute(app),
            new DeleteNutritionalPlanRoute(app),
            new GetNutritionalPlansRoute(app),
            new GetNutritionalPlanRoute(app),
            new DashboardRoute(app)
        ]
    }

    public InitializeRoutes(): void {
        this.routes.map((route, index) => {
            route.Init();
        });
    }
}