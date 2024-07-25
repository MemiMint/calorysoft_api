import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

export class ApplicationMiddlewares {
    private _app: Application;

    constructor(app: Application) {
        this._app = app;
    }

    public Exec() {
        this._app.use(morgan("dev"));
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: true }))
        this._app.use(cors());
    }
}