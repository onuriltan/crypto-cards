export const cryptoMarketService = async (page: number, perPage: number) => {
  try {
    const response = await fetch(
      `${process.env.VUE_APP_COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true`
    );
    if (!response.status.toString().startsWith("2")) {
      throw await response.json();
    }
    const markets = await response.json();
    return markets;
  } catch (e) {
    throw new Error(e);
  }
};
