import {userService} from './user.service.js';

class UserController {
    // getUsers = (request, response, next) => {
    //     userService.findById(request.params.id)
    //         .then(item => response.json(item))
    //         .catch(next);
    // };

    count = (request, response, next) => {
        return userService.count(request.where.email)
            .then(item => {
                return item;
            })
            .catch(next);
    };

    createUser = (request, response, next) => {
        userService.create(request.body)
            .then(pseudo => {
                response.status(201).json(pseudo);
            })
            .catch(next);
    };

    updateUser = (request, response, next) => {
        userService.update(request.params.id, request.body)
            .then(item => response.json(item))
            .catch(next);
    };

    deleteUser = (request, response, next) => {
        userService.remove(request.params.id)
            .then(() => response.status(204).json())
            .catch(next);
    };
}

export const userController = new UserController();
