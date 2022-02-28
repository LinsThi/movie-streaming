import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

import { ProgressBar } from '~/components/ProgressBar';

import leftArrow from '~/assets/icons/leftArrow.png';
import star from '~/assets/icons/star.png';
import upload from '~/assets/icons/upload.png';
import type { ParamPros } from '~/dtos/RouteParams';
import theme from '~/theme';

import * as Sty from './styles';

type ParamList = {
  movieSelected: ParamPros;
};

export function MovieDetail() {
  const route = useRoute<RouteProp<ParamList, 'movieSelected'>>();
  const navigation = useNavigation();

  const { movieSelected } = route.params;

  return (
    <Sty.Container
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#000',
      }}
    >
      <Sty.ImageMovie source={movieSelected.details.image} resizeMode="cover">
        <Sty.ContainerMovie>
          <Sty.ContainerHeader>
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
          </Sty.ContainerHeader>

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

      <Sty.ContainerCategory>
        <Sty.ContainerCategoryInfo style={{ marginLeft: 0 }}>
          <Sty.TextCategoryInfo>
            {movieSelected.details.age}
          </Sty.TextCategoryInfo>
        </Sty.ContainerCategoryInfo>

        <Sty.ContainerCategoryInfo
          style={{ paddingHorizontal: theme.Sizes.PADDING }}
        >
          <Sty.TextCategoryInfo>
            {movieSelected.details.genre}
          </Sty.TextCategoryInfo>
        </Sty.ContainerCategoryInfo>

        <Sty.ContainerCategoryInfo>
          <Sty.ImageStar source={star} resizeMode="contain" />
          <Sty.TextCategoryInfo style={{ marginLeft: 5 }}>
            {movieSelected.details.ratings}
          </Sty.TextCategoryInfo>
        </Sty.ContainerCategoryInfo>
      </Sty.ContainerCategory>

      <Sty.ContainerMovieInfo>
        <View>
          <Sty.ContainerMovieInfoTitle>
            <Text
              style={{
                flex: 1,
                color: theme.Colors.WHITE,
                fontSize: theme.Sizes.H4,
              }}
            >
              {movieSelected.details.currentEpisode}
            </Text>
            <Text
              style={{
                color: theme.Colors.LIGHT_GRAY,
                fontSize: theme.Sizes.BODY4,
              }}
            >
              {movieSelected.details.runningTime}
            </Text>
          </Sty.ContainerMovieInfoTitle>
          <ProgressBar barPercentage={movieSelected.details.progress} />
        </View>

        <Sty.ButtonWatch>
          <Sty.TextButtonWatch>
            {movieSelected.details.progress === '0%' ? 'WATCH NOW' : 'CONTINUE'}
          </Sty.TextButtonWatch>
        </Sty.ButtonWatch>
      </Sty.ContainerMovieInfo>
    </Sty.Container>
  );
}
