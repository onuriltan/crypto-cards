import * as sampleCryptoMarketData from "./sampleCryptoMarketData.json";

export const cryptoMarketService = () => {
  // return static data for now to not get caught to rate limit
  return sampleCryptoMarketData;
};
