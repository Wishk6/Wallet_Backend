import {ResourceFormatException, ResourceNotFoundException, RoleNotAllowedException} from "../common/app.exception.js";
import {walletService} from "./wallet.service.js";
import {getToken} from "../authentication/authentication.middleware.js";
import {checkToken} from "../common/jwt.utils.js";

export const checkWalletCreationMiddleware = (request, response, next) => {
	if (!request.body.name || typeof request.body.name !== "string") {
		next(new ResourceFormatException("Crypto name", "string"));
	} else {
		next();
	}
};

export const checkWalletUpdateMiddleware = (request, response, next) => {
	if (!request.body.cryptocurrency_amount || typeof request.body.investment_amount !== "number") {
		next(new ResourceFormatException("Crypto and dollars investment ", "number"));
	} else {
		next();
	}
};

/**
 * récupère l'id du token et vérifie s'il est bien égal à celui de
 * l'id du wallet qui correspond à l'id de la requête
 * @param request
 * @param response
 * @param next
 */
export const checkTokenIdMatchesWalletIdMiddleware = (request, response, next) => {
	let idToken = getToken(request);
	checkToken(idToken).then(user => {
		walletService.findWalletById(request.url.slice(1, request.url.length))
			.then(wallet => {
				if (wallet) {
					if (wallet.id_user === user.id) {
						next();
					} else {
						next(new ResourceNotFoundException());
					}
				} else {
					next(new ResourceNotFoundException());
				}
			});
	}).catch(error => {
		next(error);
	});
};