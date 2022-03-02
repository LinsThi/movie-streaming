import styled from 'styled-components/native';

import theme from '~/theme';

export const Container = styled.View`
  flex: 1;
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

export const ContainerLastView = styled.View``;

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

export const TextEpisode = styled.Text`
  flex: 1;
  color: ${theme.Colors.LIGHT_GRAY};
  font-size: ${theme.Sizes.H4}px;
`;

export const TextRunningTime = styled.Text`
  color: ${theme.Colors.LIGHT_GRAY};
  font-size: ${theme.Sizes.BODY4}px;
`;

export const TextButtonWatch = styled.Text`
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.H2}px;
`;
