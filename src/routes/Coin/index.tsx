import { useQuery } from 'react-query';
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from 'react-router-dom';

import { getCoinInfo, getTickers } from 'api';
import { Container, Header, Title } from 'routes/Coins/styles';

import { RouteState, InfoData, PriceData } from './interfaces';
import { Overview, OverviewItem, Description, Tabs, Tab } from './styles';

export default function Coin() {
  const { coinId } = useParams();
  const location = useLocation();
  const state = location.state as RouteState;
  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');
  const info = useQuery<InfoData>(['info', coinId], () =>
    getCoinInfo(coinId || '')
  );
  const tickers = useQuery<PriceData>(['tickers', coinId], () =>
    getTickers(coinId || '')
  );
  const loading = info.isLoading || tickers.isLoading;

  const renderTitle = () => {
    if (state?.name) return state.name;
    if (loading) return 'Loading...';
    if (info.data?.name) return info.data.name;
    return 'something is wrong';
  };

  return (
    <Container>
      <Header>
        <Title>{renderTitle()}</Title>
      </Header>
      <Overview>
        <OverviewItem>
          <span>Rank:</span>
          <span>{info.data?.rank}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Symbol:</span>
          <span>{info.data?.symbol}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Open Source:</span>
          <span>{info.data?.open_source}</span>
        </OverviewItem>
      </Overview>
      <Description>{info.data?.description}</Description>
      <Overview>
        <OverviewItem>
          <span>Total Supply:</span>
          <span>{tickers.data?.total_supply}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Max Supply:</span>
          <span>{tickers.data?.max_supply}</span>
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
