import express from 'express';
import { authController } from './authentication.controller.js';
import { checkLoginCredentialsMiddleware } from './authentication.middleware.js';

export const authenticationRouter = express.Router();
authenticationRouter.post('/login', checkLoginCredentialsMiddleware, authController.login);
