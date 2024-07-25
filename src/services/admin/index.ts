import { AdminExists } from "./admin-exists";

export class AdminService {
    public AdminExists: AdminExists;

    constructor() {
        this.AdminExists = new AdminExists();
    }
}