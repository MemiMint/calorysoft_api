import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite",
    host: "localhost"
});

export {
    sequelize
}