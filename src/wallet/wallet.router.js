import express from "express";
import {walletController} from "./walletController.js";
import {checkIdMiddleware, checkTokenIdMiddleware} from "../common/check-id.middleware.js";
import {checkAuthorizationToken} from "../authentication/authentication.middleware.js";
import {
	checkTokenIdMatchesWalletIdMiddleware,
	checkWalletCreationMiddleware,
	checkWalletUpdateMiddleware
} from "./wallet.middleware.js";
import {checkDuplicateCryptoMiddleware} from "../cryptoData/cryptoData.middleware.js";

export const walletRouter = express.Router();
walletRouter.get("/", checkAuthorizationToken, checkTokenIdMiddleware, walletController.getWallets);
walletRouter.post("/", checkAuthorizationToken, checkTokenIdMiddleware, checkWalletCreationMiddleware, checkDuplicateCryptoMiddleware, walletController.createWallet);
walletRouter.patch("/:id", checkAuthorizationToken, checkIdMiddleware, checkTokenIdMatchesWalletIdMiddleware, checkWalletUpdateMiddleware, walletController.updateWallet);
walletRouter.delete("/:id", checkAuthorizationToken, checkIdMiddleware, checkTokenIdMatchesWalletIdMiddleware, walletController.deleteWallet);
