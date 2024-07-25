import express, { Application } from "express";
import { ApplicationSettings } from "../settings";
import { ApplicationMiddlewares } from "../middlewares";
import { sequelize } from "../database/db";
import { RouterHandler } from "../routes/";
import { config } from "dotenv";

export class CalorysoftApplication {
    private application: Application;
    private _settings: ApplicationSettings;
    private _middlewares: ApplicationMiddlewares;
    private _routerHandler: RouterHandler;

    constructor() {
        this.application = express();
        this._settings = new ApplicationSettings(this.application, 4000);
        this._middlewares = new ApplicationMiddlewares(this.application);
        this._routerHandler = new RouterHandler(this.application);

        this._settings.Exec();
        this._middlewares.Exec();
        this._routerHandler.InitializeRoutes();
    
        config();
    }

    public async Listen(): Promise<void> {    
        try {
            await this.application.listen(this.application.get("port"), () => {
                sequelize.sync({ logging: true });
                console.log(`Listening on port: ${this.application.get("port")}`);
            })
        } catch (error) {
            console.error(error);
        }
    }
}