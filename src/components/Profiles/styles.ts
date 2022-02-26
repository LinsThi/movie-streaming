import styled from 'styled-components/native';

import theme from '~/theme';

interface ProfileImageProps {
  indexProfile: number;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerArrayProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image<ProfileImageProps>`
  width: 40px;
  height: 40px;
  margin-left: ${({ indexProfile }) => (indexProfile === 0 ? 0 : -15)}px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${theme.Colors.BLACK};
`;

export const ProfilesQuantity = styled.Text`
  margin-left: ${theme.Sizes.BASE}px;
  color: ${theme.Colors.WHITE};
  font-size: ${theme.Sizes.BODY3}px;
`;
