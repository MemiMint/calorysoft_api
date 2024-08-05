import { User } from "../../types/models/user";
import { UserModel } from "../../model/User";

export class GetAssistant {
    public async assistant(uid: string): Promise<User> {
        try {
            const user: User = await UserModel.findOne({
                where: {
                    uid: uid
                }
            });

            return user;
        } catch (error) {
            console.error("[Service Error]: ", error);

            return null
        }
    }
}