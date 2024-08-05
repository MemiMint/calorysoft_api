import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/db";

export class NutritionalPlanModel extends Model {
    declare id: number;
    declare title: string;
    declare description: string;
    declare weekly_plans: string;
}

NutritionalPlanModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    weekly_plans: DataTypes.JSON
}, { sequelize, modelName: "nutritional_plan", tableName: "nutritional_plans" });

// const Patient = sequelize.define("Patient", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: DataTypes.STRING,
//     lastname: DataTypes.STRING,
//     sex: DataTypes.CHAR,
//     age: DataTypes.INTEGER,
//     height: DataTypes.INTEGER,
//     physical_Activty: DataTypes.FLOAT,
//     weight: DataTypes.INTEGER,
//     np_id: DataTypes.INTEGER,
//     email: DataTypes.STRING,
//     notes: DataTypes.TEXT
// });