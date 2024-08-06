import { User } from "../../types/models/user";
import { UserModel } from "../../model/User";

export class SearchAssistannt {
    public async search(cid: string): Promise<User[]> {
        try {
            const users: User[] = await UserModel.findAll({
                where: {
                    cid: cid
                }
            });

            return users;
        } catch (error) {
            console.error("[Service Error]: ", error);

            return [];
        }
    }
}