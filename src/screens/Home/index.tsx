import React from 'react';

import { ContinueWatching } from './components/ContinueWatching';
import { FlatlistMovie } from './components/FlatlistMovie';
import { Header } from './components/Header';

import * as Sty from './styles';

export function Home() {
  return (
    <Sty.Container>
      <Header />

      <Sty.ContainerScroll>
        <FlatlistMovie />

        <ContinueWatching />
      </Sty.ContainerScroll>
    </Sty.Container>
  );
}
