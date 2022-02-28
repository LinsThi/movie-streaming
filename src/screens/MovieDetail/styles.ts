import { Platform } from 'react-native';
import styled from 'styled-components/native';

import theme from '~/theme';

export const Container = styled.ScrollView`
  background: ${theme.Colors.BLACK};
`;

export const ImageMovie = styled.ImageBackground`
  width: 100%;
  height: ${theme.Sizes.HEIGHT < 700
    ? theme.Sizes.HEIGHT * 0.6
    : theme.Sizes.HEIGHT * 0.7}px;
`;

export const ContainerMovie = styled.View`
  flex: 1;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${Platform.OS === 'ios' ? 40 : 10}px;
  padding-top: ${theme.Sizes.PADDING}px;
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

export const ContainerCategory = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerCategoryInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: ${theme.Sizes.BASE}px;
  padding: 3px ${theme.Sizes.BASE}px;
  border-radius: ${theme.Sizes.BASE}px;
  background: ${theme.Colors.GRAY_1};
`;

export const TextCategoryInfo = styled.Text`
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.H4}px;
`;

export const ImageStar = styled.Image`
  width: 15px;
  height: 15px;
`;

export const ContainerMovieInfo = styled.View`
  flex: 1;
  padding: 0px ${theme.Sizes.PADDING}px;
  margin-top: ${theme.Sizes.PADDING}px;
  justify-content: space-around;
`;

export const ContainerMovieInfoTitle = styled.View`
  flex-direction: row;
`;

export const ContainerMovieInfoWatch = styled.View``;

export const ButtonWatch = styled.TouchableOpacity`
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.Sizes.PADDING}px;
  border-radius: 15px;
  background: ${theme.Colors.PRIMARY};
`;

export const TextButtonWatch = styled.Text`
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.H2}px;
`;
