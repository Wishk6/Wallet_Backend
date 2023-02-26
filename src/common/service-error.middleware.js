import {ResourceNotFoundException} from "./app.exception.js";
import {EmptyResultError} from "sequelize";

export const serviceErrorMiddleware = (error, request, response, next) => {
    if (error instanceof EmptyResultError) {
        console.log(error)
        return next(new ResourceNotFoundException());
    }
    next(error);
};
