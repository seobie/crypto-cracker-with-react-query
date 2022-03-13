import styled from 'styled-components';

import { flexRowBetween, flexColumnCenter, flexRowCenter } from 'styles';

export const Overview = styled.div`
  ${flexRowBetween};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 1rem;
`;

export const OverviewItem = styled.div`
  ${flexColumnCenter};

  span:first-child {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
`;

export const Description = styled.p`
  margin: 2rem 0;
`;

export const Tabs = styled.div`
  ${flexRowCenter};
  width: 100%;
  margin: 2.5rem 0;
  gap: 1rem;
`;

export const Tab = styled.div<{ isActive: boolean }>`
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
