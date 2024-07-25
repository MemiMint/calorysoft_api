import { Application } from "express";

export class ApplicationSettings { 
    private _app: Application;
    private _port?: string | number;

    constructor(app: Application, port?: string | number) {
        this._app = app;
        this._port = port;
    }

    public Exec() {
        this._app.set("port", this._port);
    }
}