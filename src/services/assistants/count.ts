import { UserModel } from "../../model/User";

export const totalAssistantCount = async () => await UserModel.count({ where: { role: 0 } });