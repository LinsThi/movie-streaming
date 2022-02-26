import styled from 'styled-components/native';

import theme from '~/theme';

export const Container = styled.View`
  margin-top: ${theme.Sizes.PADDING}px;
`;

export const ContainerHeader = styled.View`
  padding: 0px ${theme.Sizes.PADDING}px;
  align-items: center;
  flex-direction: row;
`;

export const TextSection = styled.Text`
  flex: 1;
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.H2}px;
`;

export const IconSection = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Flatlist = styled.FlatList``;

export const ButtonMovie = styled.TouchableWithoutFeedback``;

export const ContainerMovie = styled.View``;

export const ImageMovie = styled.Image`
  width: ${theme.Sizes.WIDTH / 3}px;
  height: ${theme.Sizes.WIDTH / 3 + 60}px;
  border-radius: 20px;
`;

export const TextMovie = styled.Text`
  margin-top: ${theme.Sizes.BASE}px;
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.H4}px;
`;
