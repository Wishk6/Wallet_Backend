import {ResourceFormatException} from "../common/app.exception.js";

export const checkUserCreationMiddleware = (request, response, next) => {
    if (request.body.role || typeof request.body.role == 'string') {
        next(new ResourceFormatException("role", "not allowed"));
    }
    if (!request.body.pseudo || typeof request.body.pseudo !== 'string' ) {
        next(new ResourceFormatException("username", "string"));
    }
    if (!request.body.password || typeof request.body.password !== 'string') {
        next(new ResourceFormatException("password", "string"));
    }
    if (!request.body.email || typeof request.body.email !== 'string' || !request.body.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        next(new ResourceFormatException("email", "string and written in a valid email format"));
    } else {
        next();
    }
};


