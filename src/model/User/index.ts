import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/db";

export class UserModel extends Model {
    declare id: number;
    declare uuid: string;
    declare firstname: string;
    declare lastname: string;
    declare cid: string;
    declare username: string;
    declare password: string;
    declare role: number;
};


UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    uuid: {
        type: DataTypes.UUIDV1,
        primaryKey: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    cid: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.NUMBER
}, { sequelize, modelName: "user", tableName: "users" });

const user = new UserModel({ id: 0 });

user