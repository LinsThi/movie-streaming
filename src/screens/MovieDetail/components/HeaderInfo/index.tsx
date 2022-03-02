import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import leftArrow from '~/assets/icons/leftArrow.png';
import upload from '~/assets/icons/upload.png';
import type { ContinueWatchingDTO } from '~/dtos/NewSeason';
import theme from '~/theme';

import * as Sty from './styles';

type HeaderInfoProps = {
  movieSelected: ContinueWatchingDTO;
};

export function HeaderInfo({ movieSelected }: HeaderInfoProps) {
  const navigation = useNavigation();

  return (
    <Sty.ImageMovie source={movieSelected.details.image} resizeMode="cover">
      <Sty.ContainerMovie>
        <Sty.ContainerButtons>
          <Sty.ButtonHeader onPress={() => navigation.goBack()}>
            <Sty.ImageButton
              source={leftArrow}
              style={{ tintColor: theme.Colors.WHITE }}
            />
          </Sty.ButtonHeader>

          <Sty.ButtonHeader onPress={() => console.log('Shared')}>
            <Sty.ImageButton
              source={upload}
              style={{ tintColor: theme.Colors.WHITE }}
            />
          </Sty.ButtonHeader>
        </Sty.ContainerButtons>

        <Sty.ContainerInfo>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['transparent', '#000']}
            style={{
              width: '100%',
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sty.TextSeason>{movieSelected.details.season}</Sty.TextSeason>

            <Sty.TextName>{movieSelected.name}</Sty.TextName>
          </LinearGradient>
        </Sty.ContainerInfo>
      </Sty.ContainerMovie>
    </Sty.ImageMovie>
  );
}
