import { User } from "types/models/user";
import { UserModel } from "../../model/User";

export class Me {
    public async me(uuid: string): Promise<User | null> {

        try {
            const user: User | null = await UserModel.findOne({
                where: {
                    uuid: uuid
                }
            });

            if (!user) {
                return null;
            }

            return user;
        } catch (error) {
            console.error("[ERROR SERVICE]: ", error);

            return null;
        }
    }
}