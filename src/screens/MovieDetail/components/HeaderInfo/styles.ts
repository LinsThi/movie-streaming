import { Platform } from 'react-native';
import styled from 'styled-components/native';

import theme from '~/theme';

export const ImageMovie = styled.ImageBackground`
  width: 100%;
  height: ${theme.Sizes.HEIGHT < 700
    ? theme.Sizes.HEIGHT * 0.6
    : theme.Sizes.HEIGHT * 0.7}px;
`;

export const ContainerMovie = styled.View`
  flex: 1;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${Platform.OS === 'ios' ? 40 : 10}px;
  padding-top: ${theme.Sizes.PADDING}px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ButtonHeader = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background: ${theme.Colors.TRANSPARENT_BLACK};
`;

export const ImageButton = styled.Image`
  width: 20px;
  height: 20px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const TextSeason = styled.Text`
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.BODY4}px;
`;

export const TextName = styled.Text`
  margin-top: ${theme.Sizes.BASE}px;
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.H1}px;
`;
