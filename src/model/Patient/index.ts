import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/db";

export class PatientModel extends Model {
    declare id: number;
    declare firstname: string;
    declare lastname: string;
    declare sex: string;
    declare age: string;
    declare height: string;
    declare physical_activity: number;
    declare weight: string;
    declare np_id: number;
    declare email: string;
    declare notes: string;
}

PatientModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    sex: DataTypes.CHAR,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    physical_Activty: DataTypes.FLOAT,
    weight: DataTypes.INTEGER,
    np_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    notes: DataTypes.TEXT
}, { sequelize, modelName: "patient", tableName: "patients" });

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