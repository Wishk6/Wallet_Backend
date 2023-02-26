import {ResourceFormatException, RoleNotAllowedException} from "./app.exception.js";
import {getToken} from "../authentication/authentication.middleware.js";
import {checkToken} from "./jwt.utils.js";

export const checkIdMiddleware = (request, response, next) => {
	const id = request.params.id;
	if (isNaN(id) || id <= 0 && (/^\d+$/).test(id.toString())) {
		next(new ResourceFormatException("id", "number"));
	} else {
		next();
	}
};

/**
 * récupère l'id du token et vérifie si il est bien égal à celui de la requête
 * @param request
 * @param response
 * @param next
 */
export const checkTokenIdMiddleware = (request, response, next) => {
	let idToken = getToken(request);
	checkToken(idToken)
		.then(user => {
			if (request.url === "/") {
				request.body.id = user.id;
				next();
			} else {
				if (+request.url.substring(1, request.url.length) === user.id) {
					next();
				} else {
					next(new RoleNotAllowedException());
				}
			}
		})
		.catch(error => {
			next(error);
		});
};