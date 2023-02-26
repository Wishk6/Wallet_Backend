import {CreationErrorException, ResourceFormatException, ResourceNotFoundException} from "../common/app.exception.js";
import {cryptoDataController} from "./cryptoDataController.js";
import {cryptoDataService} from "./cryptoData.service.js";

export const checkCryptoCreationMiddleware = (request, response, next) => {
	if (!request.body.name || typeof request.body.name !== "string") {
		next(new ResourceFormatException("name", "string"));
	} else {
		next();
	}
};

export const checkDuplicateCryptoMiddleware = (request, response, next) => {
	cryptoDataService.fetchData(request.body.name)
		.then(data => {
			// TODO: peut changer le findbyName par un find by apiId pour plus de sécurité si coingecko change jamais l'id
			cryptoDataService.findByName(data[0].name).then(crypto => {
				if (!crypto) {
					data.forEach(item => item.id_user = request.body.id); // on ajoute l'id de l'utilisateur

					cryptoDataController.createCrypto(data[0]).then(response => {
						if (response.status !== 404) {
							request.body.id_cryptocurrency = response.id;
							next();
						} else {
							next(new CreationErrorException());
						}
					});
				} else {
					request.body.id_cryptocurrency = crypto.id;
					next();
				}
			});
		}).catch(() => {
		next(new ResourceNotFoundException());
	});
};

