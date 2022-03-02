import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import React from 'react';

import type { ParamPros } from '~/dtos/RouteParams';

import { DetailsCategory } from '../../components/DetailsCategory';
import { HeaderInfo } from '../../components/HeaderInfo';

import * as Sty from './styles';

type ParamList = {
  movieSelected: ParamPros;
};

export function MovieDetail() {
  const route = useRoute<RouteProp<ParamList, 'movieSelected'>>();

  const { movieSelected } = route.params;

  return (
    <Sty.Container
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#000',
      }}
    >
      <HeaderInfo movieSelected={movieSelected} />

      <DetailsCategory movieSelected={movieSelected} />
    </Sty.Container>
  );
}
