import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { flexCenter } from 'styles';

const Container = styled.div`
  padding: 0 2rem;
`;

const Header = styled.header`
  ${flexCenter};
  height: 10vh;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  border-radius: 1.5rem;
  background-color: white;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 1.6rem;

  & + & {
    margin-top: 1rem;
  }

  a {
    display: block;
    padding: 2rem;
    transition: color 0.2s ease-in;
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 4.8rem;
  color: ${({ theme }) => theme.accentColor};
`;

const COINS = [
  {
    id: 'btc-bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'eth-ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'usdt-tether',
    name: 'Tether',
    symbol: 'USDT',
    rank: 3,
    is_new: false,
    is_active: true,
    type: 'token',
  },
];

export default function Coins() {
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        {COINS.map(({ id, name }) => (
          <Coin key={id}>
            <Link to={`/${id}`}>{name} &rarr;</Link>
          </Coin>
        ))}
      </CoinList>
    </Container>
  );
}
