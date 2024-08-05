import { User } from "../../types/models/user";
import { UserModel } from "../../model/User";

export class GetAssistants {
    public async assistants(): Promise<User[]> {
        try {
            const users: User[] = await UserModel.findAll({
                where: {
                    role: 0
                }
            });

            return users;
        } catch (error) {
            console.error("[Service Error]: ", error);

            return [];
        }
    }
}