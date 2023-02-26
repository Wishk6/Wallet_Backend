import {mapToDtoCryptocurrency} from "../cryptoData/cryptoData.mapper.js";

export const mapFromDto = (item) => ({
	cryptocurrency_amount: item.cryptocurrency_amount,
	investment_amount: item.investment_amount,
	id_user: item.id,
	id_cryptocurrency: item.id_cryptocurrency,
});

// pour retourner au front
export const mapToDto = (item) => ({
	id: item.id,
	cryptocurrency_amount: item.cryptocurrency_amount,
	investment_amount: item.investment_amount,
	CryptoDataModel: mapToDtoCryptocurrency(item.CryptoDataModel)
});

