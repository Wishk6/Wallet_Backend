import {UserModel} from './user.model.js';

class User {
    countEmailInDatabase = email => {
        return UserModel.count({where: {email: email}})
    }

    findById = id => UserModel.findByPk(id, {rejectOnEmpty: true});

    //correct this warning with a news findByCredentials function
    findByCredentials = (email, password) => UserModel.findOne({
        where: {email: email, password: password}, rejectOnEmpty: true
    });

    create = item => UserModel.create(item).then(item => item.get('pseudo'));

    update = (id, item) => this.findById(id)
        .then(itemToUpdate => itemToUpdate.update(item))
        .then(() => this.findById(id));

    remove = id => this.findById(id)
        .then(() => UserModel.destroy({where: {id}}));
}

export const user = new User();
