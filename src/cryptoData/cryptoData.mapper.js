export const mapFromDto = (item) => ({
    id: item.id,
    symbol: item.symbol,
    name: item.name,
    image: item.image,
    price: item.price,
    rank: item.rank,
    price_change_24: item.price_change_24
});
export const mapToDtoCryptocurrency = dto => ({
    apiId: dto.id,
    symbol: dto.symbol,
    name :  dto.name,
    image :  dto.image,
    price :  dto.current_price,
    rank :  dto.market_cap_rank,
    price_change_24 : dto.price_change_24h
});

export const mapToPartialDtoCryptocurrency = (item) => ({
    apiId: item.id,
    symbol: item.symbol,
    name: item.name,
    price: item.current_price,
    rank: item.market_cap_rank,
    price_change_24: item.price_change_24h
}   );
