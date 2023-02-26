import { AppException, UnexpectedException } from './app.exception.js';

// do not remove next parameter even if it is unused
export const errorMiddleware = (error, request, response, next) => {
    const isException = error instanceof AppException;
    const exception = isException ? error : new UnexpectedException();
    response.status(exception.status).json({
        code: exception.status,
        message: exception.message
    });
    if (!isException) {
        console.error(error);
    }
};
