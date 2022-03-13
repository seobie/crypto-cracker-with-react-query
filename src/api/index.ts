const BASE_URL = 'https://api.coinpaprika.com/v1';

export const getCoins = async () => {
  const response = await (await fetch(`${BASE_URL}/coins`)).json();
  return response;
};

export const getCoinInfo = async (coinId: string) => {
  const response = await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
  return response;
};

export const getTickers = async (coinId: string) => {
  const response = await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
  return response;
};
