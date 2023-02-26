import {CryptoDataModel} from "./cryptoData.model.js";
import {CreationErrorException, UnexpectedException} from "../common/app.exception.js";

class CryptoData {
	// get all crypto data from database and return all the names
	getAllCrypto = () => CryptoDataModel.findAll()
		.then(items => {
			if (items) {
				return items.map(item => item.dataValues);
			} else {
				new UnexpectedException();
			}
		});

	findByName = name => CryptoDataModel.findOne({
		where: {
			name: name
		}
	});

	create = items => {
		return CryptoDataModel.create(items).then(item => {
			return item;
		})
			.catch(err => {
				return new CreationErrorException(err);
			});
	};

	update = (id,partialDto) => {
	return CryptoDataModel.update(partialDto, {where: {apiId: id}})
	};

	// remove = id => this.findById(id)
	// 	.then(() => CryptoDataModel.destroy({where: {id}}));
}

export const cryptoData = new CryptoData();