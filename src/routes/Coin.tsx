import { ReactNode } from 'react';

import { useParams } from 'react-router-dom';

interface CoinProps {
  children?: ReactNode;
}

export default function Coin({ children }: CoinProps) {
  const { coinId } = useParams();

  return (
    <>
      <div>Coin: {coinId}</div>
      {children}
    </>
  );
}
