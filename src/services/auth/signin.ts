import { User } from "types/models/user";
import { UserModel } from "../../model/User";
import { PasswordEncrypter } from "../../utils/crypt";

export class SignIn {
    public async Login(username: string, password: string): Promise<User | null> {
        const passwordEncrypter = new PasswordEncrypter();

        try {
            const user: User | null = await UserModel.findOne({
                where: {
                    username: username
                }
            });

            if (!user) {
                return null;
            }

            if (!passwordEncrypter.DoesPasswordMatch(password, user.password)) {
                return null;
            }

            return user;
        } catch (error) {
            console.error("[ERROR SERVICE]: ", error);

            return null;
        }
    }
}