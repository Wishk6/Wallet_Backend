import {user} from './user.js';
import {mapFromDtoUserModel, mapToDto} from './user.mapper.js';

class UserService {

    count = (req) => {
        return user.countEmailInDatabase(req);
    }
    create = dto => Promise.resolve(dto)
        .then(dto => mapFromDtoUserModel(dto))
        .then(model => user.create(model))
        .then(model => mapToDto({pseudo: model}));

    // findById = id => Promise.resolve(id)
    //     .then(id => Number(id))
    //     .then(id => user.findById(id))
    //     .then(model => mapToDto(model));

    findByCredentials = (email, password) => Promise.resolve(email)
        .then(email => user.findByCredentials(email, password)
            .then(model => mapToDto(model)));

    update = (id, dto) => Promise.resolve(dto)
        .then(dto => mapFromDtoUserModel(dto))
        .then(model => user.update(id, model))
        .then(model => mapToDto(model));

    remove = id => Promise.resolve(id)
        .then(id => Number(id))
        .then(id => user.remove(id))
        .then(() => undefined);
}

export const userService = new UserService();
