import { useEffect, useState } from 'react';

import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';

import { Container, Header, Title } from 'routes/Coins/styles';
import { flexColumnCenter, flexRowBetween, flexRowCenter } from 'styles';

const Overview = styled.div`
  ${flexRowBetween};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 1rem;
`;

const OverviewItem = styled.div`
  ${flexColumnCenter};

  span:first-child {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  margin: 2rem 0;
`;

const Tabs = styled.div`
  ${flexRowCenter};
  width: 100%;
  margin: 2.5rem 0;
  gap: 1rem;
`;

const Tab = styled.div<{ isActive: boolean }>`
  width: 100%;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;

  a {
    display: block;
    width: 100%;
    padding: 0.7rem 0;
    color: ${({ isActive, theme }) =>
      isActive ? theme.accentColor : 'inherit'};
  }
`;

interface RouteState {
  name: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: false;
  is_active: true;
  type: string;
  tags: {
    id: string;
    name: string;
    coin_counter: number;
    ico_counter: number;
  }[];
  team: {
    id: string;
    name: string;
    position: string;
  }[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: {
    explorer: string;
    facebook: string;
    reddit: string;
    source_code: string;
    website: string;
    youtube: string;
  };
  links_extended: {
    url: string;
    type: string;
  }[];
  whitepaper: {
    link: string;
    thumbnail: string;
  };
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

export default function Coin() {
  const { coinId } = useParams();
  const location = useLocation();
  const state = location.state as RouteState;
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');

  useEffect(() => {
    if (!coinId) return;
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>{state?.name || info?.name}</Title>
      </Header>
      <Overview>
        <OverviewItem>
          <span>Rank:</span>
          <span>{info?.rank}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Symbol:</span>
          <span>{info?.symbol}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Open Source:</span>
          <span>{info?.open_source}</span>
        </OverviewItem>
      </Overview>
      <Description>{info?.description}</Description>
      <Overview>
        <OverviewItem>
          <span>Total Supply:</span>
          <span>{priceInfo?.total_supply}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Max Supply:</span>
          <span>{priceInfo?.max_supply}</span>
        </OverviewItem>
      </Overview>
      <Tabs>
        <Tab isActive={!!chartMatch?.pathname}>
          <Link to='chart'>chart</Link>
        </Tab>
        <Tab isActive={!!priceMatch?.pathname}>
          <Link to='price'>price</Link>
        </Tab>
      </Tabs>
      <Outlet />
    </Container>
  );
}
