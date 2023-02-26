import {cryptoDataService} from "./cryptoData.service.js";
import {UpdateErrorException, UpdateUptimeException} from "../common/app.exception.js";
import {mapToPartialDtoCryptocurrency} from "./cryptoData.mapper.js";

class CryptoData {

	createCrypto(data) {
		return cryptoDataService.create(data)
			.then(items => {
				return items;
			});
	};

	updateCrypto = (request, response, next) => {
		cryptoDataService.getAllCrypto()
			.then((data) => {
				// verifier si la crypto est dans la bdd et si elle a été mise à jour il y a moins de 15 minutes
				// pour bloquer l'update de l'user, mais pas du scheduler car il fait un update toutes les 24 heures
				if (data.length > 0 && data[0].updatedAt.getTime() < new Date().getTime() - 900000) {
					let cryptoNames = [];
					data.forEach(crypto => {
						cryptoNames.push(crypto.apiId);
					});
					cryptoNames = cryptoNames.join(",");
					cryptoDataService.fetchData(cryptoNames)
						.then(data => {
							data.forEach(item => {
								item = mapToPartialDtoCryptocurrency(item);
								cryptoDataService.update(item.apiId, item)
									.then().catch(next);
								// quand on a on a fini de mettre à jour on renvoie une réponse vide
							});
						}).then(() => {
						response.status(204).json();
					}).catch(() => {
						next(new UpdateErrorException());
					});
				} else {
					next(new UpdateUptimeException(data[0].updatedAt.getTime() - (new Date().getTime() - 900000)));
				}
			});
	};

	// deleteCrypto = (request, response, next) => {
	// 	cryptoDataService.remove(request.params.id)
	// 		.then(() => response.status(204).json())
	// 		.catch(next);
	// };
}

export const cryptoDataController = new CryptoData();
