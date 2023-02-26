import {DuplicateRessourceException} from './app.exception.js';
import {userController} from "../user/userController.js";

export const checkDuplicateMiddleware = (request, response, next) => {
    userController.count({where: {email: request.body.email}})
        .then(count => {
            if (count !== 0) {
                next(new DuplicateRessourceException("email"));
            } else {
                next();
            }
        });
};
