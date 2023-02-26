import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../common/database.config.js';

export class UserModel extends Model {
}

UserModel.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate : {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user',
        allowNull: false,
    }
}, { sequelize, modelName: UserModel.name, tableName: 'user' });
