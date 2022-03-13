import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, Title, Coin, Img } from './styles';

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: false;
  is_active: true;
  type: string;
}

export default function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const coinList = await response.json();
      setCoins(coinList.slice(0, 100));
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <ul>
        {coins.map(({ id, name, symbol }) => (
          <Coin key={id}>
            <Link to={`/${id}`} state={{ name }}>
              <Img
                src={`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
                alt='icon'
              />
              {name} &rarr;
            </Link>
          </Coin>
        ))}
      </ul>
    </Container>
  );
}
