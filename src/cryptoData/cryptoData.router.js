import express from "express";
import {cryptoDataController} from "./cryptoDataController.js";
import {checkIdMiddleware, checkTokenIdMiddleware} from "../common/check-id.middleware.js";
import {checkAuthorizationToken} from "../authentication/authentication.middleware.js";
import {checkCryptoCreationMiddleware} from "./cryptoData.middleware.js";

export const cryptoDataRouter = express.Router();
cryptoDataRouter.patch("/", checkAuthorizationToken, cryptoDataController.updateCrypto); // l'user envoi son id pour qu'on update que ces cryptos
// cryptoDataRouter.delete("/:id", checkAuthorizationToken, checkTokenIdMiddleware, cryptoDataController.deleteCrypto);

