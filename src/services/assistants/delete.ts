import { User } from "../../types/models/user";
import { UserModel } from "../../model/User";

export class DeleteAssistant {
    public async delete(uid: string): Promise<User | null> {
        try {
            const user = await UserModel.findOne({
                where: {
                    uuid: uid
                }
            });

            await user.destroy();

            if (!user) {
                return null;
            }

            return user;
        } catch (error) {
            console.error("[Service Error]: ", error);

            return null;
        }
    }
}