import styled from 'styled-components';

import { flexCenter, flexRowCenter } from 'styles';

export const Container = styled.div`
  padding: 0 2rem;
  max-width: 48rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  ${flexCenter};
  height: 10vh;
`;

export const Coin = styled.li`
  border-radius: 1.5rem;
  background-color: white;
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 1.6rem;

  & + & {
    margin-top: 1rem;
  }

  a {
    ${flexRowCenter};
    padding: 2rem;
    transition: color 0.2s ease-in;
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

export const Img = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  color: ${({ theme }) => theme.accentColor};
`;
