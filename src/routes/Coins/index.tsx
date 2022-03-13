import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getCoins } from 'api';

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
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', getCoins);
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data?.slice(0, 100).map(({ id, name, symbol }) => (
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
      )}
    </Container>
  );
}
