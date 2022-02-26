import styled from 'styled-components/native';

import theme from '~/theme';

export const Container = styled.View`
  background: ${theme.Colors.BLACK};
  flex: 1;
`;

export const ContainerScroll = styled.ScrollView``;

export const ContainerItem = styled.View`
  width: ${theme.Sizes.WIDTH};
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity``;

export const Image = styled.Image``;
