import styled from 'styled-components/native';

import theme from '~/theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${theme.Sizes.PADDING}px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

export const ImageButton = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
