import styled from 'styled-components/native';

import theme from '~/theme';

interface ContainerPercentage {
  barPercentage: number;
}

export const Container = styled.View`
  margin-top: ${theme.Sizes.RADIUS}px;
`;

export const Container1 = styled.View`
  position: absolute;

  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 3px;
  margin-top: ${theme.Sizes.BASE}px;
  background: ${theme.Colors.GRAY};
`;

export const Container2 = styled.View<ContainerPercentage>`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: ${({ barPercentage }) => barPercentage}px;
  height: 3px;
  margin-top: ${theme.Sizes.BASE}px;
  background: ${theme.Colors.PRIMARY};
`;
