import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db";

const NutritionalPlan = sequelize.define("nutritional-plan", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    weekly_plans: DataTypes.JSON
});