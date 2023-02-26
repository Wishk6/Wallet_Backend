import {userService} from '../user/user.service.js';
import {generateToken} from '../common/jwt.utils.js';

class AuthenticationService {
    login = (credentials) => userService.findByCredentials(credentials.email, credentials.password)
        .then(user => generateToken({
            pseudo: user.pseudo,id:user.id, timestamp: new Date().getTime(), role: user.role
        }));
}

export const authService = new AuthenticationService()
