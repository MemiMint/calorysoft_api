import { User } from "types/models/user";
import { UserModel } from "../../model/User";
import { PasswordEncrypter } from "../../utils/crypt";

const uuidv1 = require("uuidv1");

export class SignUp {
    public async Register(firstname: string, lastname: string, cid: string, username: string, password: string, role: number ): Promise<User | null> {
        const passwordEncrypter: PasswordEncrypter = new PasswordEncrypter();

        try {
            const newUser: User = await UserModel.create({
                uuid: uuidv1(),
                firstname: firstname,
                lastname: lastname,
                cid: cid,
                username: username,
                password: await passwordEncrypter.EncryptPassword(password),
                role: role
            });

            if (!newUser) return null;

            return newUser;
        } catch (error) {
            console.error("[ERROR SERVICE]: ", error);

            return null;
        }
    }
}