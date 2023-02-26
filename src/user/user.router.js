import express from 'express';
import {userController} from "./userController.js";
import {checkUserCreationMiddleware} from "./user.middleware.js";
import {checkDuplicateMiddleware} from "../common/checkDuplicateMiddleware.js";

export const userRouter = express.Router();
// userRouter.get('/:id', checkIdMiddleware,checkAuthorizationToken, userController.getUsers);  // get user info (classic info) by id
userRouter.post('/', checkUserCreationMiddleware, checkDuplicateMiddleware, userController.createUser);  // create new user
// userRouter.patch('/:id', checkIdMiddleware, checkAuthorizationToken, userController.updateUser);  // update user info
// userRouter.delete('/:id', checkIdMiddleware, checkAuthorizationToken, userController.deleteUser); // delete user by id