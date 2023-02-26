import {DataTypes, Model} from "sequelize";
import {sequelize} from "../common/database.config.js";

export class CryptoDataModel extends Model {
}

CryptoDataModel.init({
	apiId: {
		type: DataTypes.STRING,allowNull: false,
	}, symbol: {
		type: DataTypes.STRING, allowNull: false,
	}, name: {
		type: DataTypes.STRING, allowNull: false,
	}, image: {
		type: DataTypes.STRING, allowNull: false,
	}, price: {
		type: DataTypes.STRING, allowNull: false,
	}, rank: {
		type: DataTypes.STRING, allowNull: false,
	}, price_change_24: {
		type: DataTypes.STRING, allowNull: false
	}
}, {sequelize, modelName: CryptoDataModel.name, tableName: "crypto_data"});
