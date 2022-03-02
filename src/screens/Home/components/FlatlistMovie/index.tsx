import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

import { Profiles } from '~/components/Profiles';

import play from '~/assets/icons/play.png';
import type { NewSeasonDTO } from '~/dtos/NewSeason';
import theme from '~/theme';

import dummyData from '../../utils/mock';

import * as Sty from './styles';

type FlatListProps = {
  item: NewSeasonDTO;
};

export function FlatlistMovie() {
  const navigation = useNavigation();
  const newSeasonScrollX = useRef(new Animated.Value(0)).current;
  const dotPosition = Animated.divide(newSeasonScrollX, theme.Sizes.WIDTH);

  const renderMovie = useCallback(
    ({ item }: FlatListProps) => {
      return (
        <Sty.ContainerItem>
          <Sty.ButtonWithoutFeedback
            onPress={() =>
              navigation.navigate('MovieDetail', { movieSelected: item })
            }
          >
            <Sty.ImageBackground
              source={item.thumbnail}
              resizeMode="cover"
              imageStyle={{
                borderRadius: 40,
              }}
            >
              <Sty.ContainerInfo>
                <Sty.ContainerPlay>
                  <Sty.ContainerPlayIcon>
                    <Sty.Image
                      source={play}
                      resizeMode="contain"
                      style={{
                        tintColor: theme.Colors.WHITE,
                      }}
                    />
                  </Sty.ContainerPlayIcon>

                  <Sty.TextPlay>Play now</Sty.TextPlay>
                </Sty.ContainerPlay>

                {item.stillWatching.length > 0 && (
                  <Sty.ContainerWatching>
                    <Sty.TextWatching>Still Watching</Sty.TextWatching>

                    <Profiles profiles={item.stillWatching} />
                  </Sty.ContainerWatching>
                )}
              </Sty.ContainerInfo>
            </Sty.ImageBackground>
          </Sty.ButtonWithoutFeedback>
        </Sty.ContainerItem>
      );
    },
    [navigation],
  );

  return (
    <Sty.Container>
      <Sty.Flatlist
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={theme.Sizes.WIDTH}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{
          marginTop: theme.Sizes.RADIUS,
        }}
        data={dummyData.newSeason}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false },
        )}
        renderItem={renderMovie}
      />

      <Sty.ContainerDots>
        {dummyData.newSeason.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              theme.Colors.GRAY,
              theme.Colors.PRIMARY,
              theme.Colors.GRAY,
            ],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              opacity={opacity}
              style={{
                borderRadius: theme.Sizes.RADIUS,
                marginHorizontal: 3,
                width: dotWidth,
                height: 6,
                backgroundColor: dotColor,
              }}
              key={`dot-${item.id}`}
            />
          );
        })}
      </Sty.ContainerDots>
    </Sty.Container>
  );
}
