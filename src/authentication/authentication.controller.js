import {AuthenticationFailException} from '../common/app.exception.js';
import {authService} from "./authentication.service.js";
import {EmptyResultError} from "sequelize";

class AuthenticationController {
    login = (request, response, next) => authService.login(request.body)
        .then(token => response.status(201).json(({ token })))
        .catch(error => {
            if (error instanceof EmptyResultError) {
                next(new AuthenticationFailException());
                return;
            }
            next(error);
        });
}

export const authController = new AuthenticationController();
