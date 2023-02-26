import express from 'express';
import {authenticationRouter} from './src/authentication/authentication.router.js';
import {userRouter} from "./src/user/user.router.js";
import {cryptoDataRouter} from "./src/cryptoData/cryptoData.router.js";
import {walletRouter} from "./src/wallet/wallet.router.js";

export const appRouter = express.Router();
appRouter.use('/authentication', authenticationRouter);
appRouter.use('/user', userRouter);
appRouter.use('/cryptodata', cryptoDataRouter);
appRouter.use('/wallet', walletRouter);