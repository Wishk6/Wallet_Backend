import {walletService} from "./wallet.service.js";

class WalletController {

	getWallets = (request, response, next) => {
		walletService.findAllWalletsById(request.body.id)
			.then(wallets => response.json(wallets))
			.catch(next);
	};

	createWallet = (request, response, next) => {
		walletService.create(request.body)
			.then(() => response.status(201).json())
			.catch(next);
	};

	updateWallet = (request, response, next) => {
		walletService.update(request.params.id, request.body)
			.then(() => response.status(204).json())
			.catch(next);
	};

	deleteWallet = (request, response, next) => {
		walletService.remove(request.params.id)
			.then(() => response.status(204).json())
			.catch(next);
	};
}

export const walletController = new WalletController();
