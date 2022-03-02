import React from 'react';

import { ProgressBar } from '~/components/ProgressBar';

import star from '~/assets/icons/star.png';
import type { ContinueWatchingDTO } from '~/dtos/NewSeason';
import theme from '~/theme';

import * as Sty from './styles';

type DetailsCategoryProps = {
  movieSelected: ContinueWatchingDTO;
};

export function DetailsCategory({ movieSelected }: DetailsCategoryProps) {
  return (
    <Sty.Container>
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
        <Sty.ContainerLastView>
          <Sty.ContainerMovieInfoTitle>
            <Sty.TextEpisode
              style={{
                flex: 1,
                color: theme.Colors.WHITE,
                fontSize: theme.Sizes.H4,
              }}
            >
              {movieSelected.details.currentEpisode}
            </Sty.TextEpisode>

            <Sty.TextRunningTime
              style={{
                color: theme.Colors.LIGHT_GRAY,
                fontSize: theme.Sizes.BODY4,
              }}
            >
              {movieSelected.details.runningTime}
            </Sty.TextRunningTime>
          </Sty.ContainerMovieInfoTitle>

          <ProgressBar barPercentage={movieSelected.details.progress} />
        </Sty.ContainerLastView>

        <Sty.ButtonWatch>
          <Sty.TextButtonWatch>
            {movieSelected.details.progress === '0%' ? 'WATCH NOW' : 'CONTINUE'}
          </Sty.TextButtonWatch>
        </Sty.ButtonWatch>
      </Sty.ContainerMovieInfo>
    </Sty.Container>
  );
}
