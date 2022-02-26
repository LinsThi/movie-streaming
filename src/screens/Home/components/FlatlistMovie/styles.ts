import styled from 'styled-components/native';

import theme from '~/theme';

export const Container = styled.View``;

export const ContainerItem = styled.View`
  width: ${theme.Sizes.WIDTH}px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  height: 60px;
  width: 100%;
  margin-bottom: ${theme.Sizes.RADIUS}px;
  padding: 0px ${theme.Sizes.RADIUS}px;
`;

export const ContainerPlay = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ContainerPlayIcon = styled.View`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${theme.Colors.TRANSPARENT_WHITE};
`;

export const ContainerWatching = styled.View`
  justify-content: center;
`;

export const ContainerDots = styled.View`
  margin-top: ${theme.Sizes.PADDING}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Flatlist = styled.FlatList``;

export const ButtonWithoutFeedback = styled.TouchableWithoutFeedback``;

export const ImageBackground = styled.ImageBackground`
  width: ${theme.Sizes.WIDTH * 0.85}px;
  height: ${theme.Sizes.WIDTH * 0.85}px;
  justify-content: flex-end;
`;

export const Image = styled.Image`
  width: 15px;
  height: 15px;
`;

export const TextPlay = styled.Text`
  margin-left: ${theme.Sizes.BASE}px;
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.H3}px;
`;

export const TextWatching = styled.Text`
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.H4}px;
`;
