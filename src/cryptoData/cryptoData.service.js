import {cryptoData} from "./cryptoData.js";
import {mapFromDto, mapToDtoCryptocurrency} from "./cryptoData.mapper.js";
import {CreationErrorException} from "../common/app.exception.js";

class CryptoDataService {

	async fetchData(name) {
		const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${name}`;
		const response = await fetch(url);
		return await response.json();
	}

	findByName = name => cryptoData.findByName(name);

	create = (items) => Promise.resolve(items)
		.then(items => mapToDtoCryptocurrency(items)) // on map chaque élément de items
		.then(items => cryptoData.create(items).then(createdItem => {
			if (createdItem) {
				return mapFromDto(createdItem);
			} else {
				new CreationErrorException();
			}
		}));
	getAllCrypto = (request) => {
		return cryptoData.getAllCrypto(request)
			.then((data) => {
				return data.sort((a, b) => {
					return a.id - b.id;
				});
			});
	};
	update = (id, partialDto) => Promise.resolve({id, partialDto})
		.then(({id, partialDto}) => cryptoData.update(id, partialDto))
		.then(updatedItem => {
			if (updatedItem) {
				return mapFromDto(updatedItem);
			} else {
				new CreationErrorException();
			}
		});


	// remove = id => Promise.resolve(id)
	// 	.then(id => Number(id))
	// 	.then(id => cryptoData.remove(id));
}

export const cryptoDataService = new CryptoDataService();
