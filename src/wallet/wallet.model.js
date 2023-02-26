import {sequelize} from "../common/database.config.js";
import {DataTypes, Model} from "sequelize";
import {UserModel} from "../user/user.model.js";
import {CryptoDataModel} from "../cryptoData/cryptoData.model.js";

export class WalletModel extends Model {
}

WalletModel.init({
	investment_amount: {
		allowNull: true, type: DataTypes.FLOAT
	}, cryptocurrency_amount: {
		allowNull: true, type: DataTypes.FLOAT
	}, id_user: {
		allowNull: false, type: DataTypes.INTEGER, foreignKey: true, references: {
			model: UserModel, key: "id"
		}
	}, id_cryptocurrency: {
		allowNull: false, type: DataTypes.INTEGER, foreignKey: true, references: {
			model: CryptoDataModel, key: "id"
		}
	}
}, {sequelize, modelName: WalletModel.name, tableName: "wallet"});

UserModel.hasMany(WalletModel, { foreignKey: 'id_user' });
WalletModel.belongsTo(UserModel, { foreignKey: 'id_user' });

CryptoDataModel.hasMany(WalletModel, { foreignKey: 'id_cryptocurrency' });
WalletModel.belongsTo(CryptoDataModel, { foreignKey: 'id_cryptocurrency' });