import {WalletModel} from "./wallet.model.js";
import {CryptoDataModel} from "../cryptoData/cryptoData.model.js";

class Wallet {

	findAllWalletsById = id => WalletModel.findAll({
		where: { id_user: id },
		include: [{ model: CryptoDataModel }],
		order: [
			['id', 'ASC'],
		],
	});
	create = item => WalletModel.create(item);

	findById = id => WalletModel.findByPk(id);
	update = (id, item) => this.findById(id)
		.then(itemToUpdate => itemToUpdate.update(item))
		.then(() => this.findById(id));

	remove = id => this.findById(id)
		.then(() => WalletModel.destroy({where: {id}}));
}

export const wallet = new Wallet();
