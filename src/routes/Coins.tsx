import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

export default function Coins() {
  return <Title>Coins</Title>;
}
