import { UserModel } from "../../model/User";

export class AdminExists {
    public async DoesAdminExists(): Promise<boolean> {
        const count = await UserModel.count({ where: { role: 1 } });

        if (count === 0) return false;

        return true;
    }
}