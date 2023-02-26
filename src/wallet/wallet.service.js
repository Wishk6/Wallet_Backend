import {wallet} from "./walllet.js";
import {mapFromDto, mapToDto} from "./wallet.mapper.js";

class WalletService {
	create = dto => Promise.resolve(dto)
		.then(items => mapFromDto(items))  // on map chaque élément de items
		.then(model => wallet.create(model))

	findAllWalletsById = id => Promise.resolve(id)
		.then(id => Number(id))
		.then(id => wallet.findAllWalletsById(id))
		.then(items => items.map(mapToDto));

	findWalletById = id => Promise.resolve(id)
		.then(id => Number(id))
		.then(id => wallet.findById(id));
	update = (id, dto) => Promise.resolve(dto)
		.then(model => wallet.update(id, model));
	remove = id => Promise.resolve(id)
		.then(id => Number(id))
		.then(id => wallet.remove(id));
}

export const walletService = new WalletService();
