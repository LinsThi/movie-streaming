import React from 'react';

import { ProgressBar } from '~/components/ProgressBar';

import rightArrow from '~/assets/icons/rightArrow.png';
import theme from '~/theme';

import dummyData from '../../utils/mock';

import * as Sty from './styles';

export function ContinueWatching() {
  return (
    <Sty.Container>
      <Sty.ContainerHeader>
        <Sty.TextSection>Continue Watching</Sty.TextSection>

        <Sty.IconSection
          source={rightArrow}
          style={{ tintColor: theme.Colors.PRIMARY }}
        />
      </Sty.ContainerHeader>

      <Sty.Flatlist
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: theme.Sizes.PADDING,
        }}
        data={dummyData.continueWatching}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <Sty.ButtonMovie>
              <Sty.ContainerMovie
                style={{
                  marginLeft: index === 0 ? theme.Sizes.PADDING : 20,
                  marginRight:
                    index === dummyData.continueWatching.length - 1
                      ? theme.Sizes.PADDING
                      : 0,
                }}
              >
                <Sty.ImageMovie source={item.thumbnail} resizeMode="cover" />

                <Sty.TextMovie>{item.name}</Sty.TextMovie>
                <ProgressBar barPercentage={item.overallProgress} />
              </Sty.ContainerMovie>
            </Sty.ButtonMovie>
          );
        }}
      />
    </Sty.Container>
  );
}
