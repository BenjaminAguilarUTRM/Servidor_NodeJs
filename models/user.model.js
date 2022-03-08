import { Model, DataTypes } from "sequelize";
import { database } from "../config/database.js";

export class UserModel extends Model {}

UserModel.init({
    matricula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.VARCHAR
    },
    edad: {
        type: DataTypes.INTEGER
    }

}, {
    sequelize: database,
    tableName: 'usuarios',
    timestamps: false,
});