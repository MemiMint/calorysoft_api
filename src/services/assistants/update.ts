import { UserModel } from "../../model/User";
import { User } from "../../types/models/user";

export class UpdateAssistant {
    public async update(id: string, data: Partial<User> ): Promise<User | null> {
        try {
            const assistant = await UserModel.findOne({
                where: {
                    uuid: id
                }
            });

            assistant.firstname = data.firstname;
            assistant.lastname = data.lastname;
            assistant.cid = data.cid;
            assistant.username = data.username;
            assistant.phonenumber = data.phonenumber;

            await assistant.save();

            return assistant;
        } catch (error) {
            console.error("[Service Error]: ", error);

            return null;
        }
    }
}