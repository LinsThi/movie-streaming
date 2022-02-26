import React from 'react';

import * as Sty from './styles';

interface ProgressBarProps {
  barStyle?: any;
  barPercentage: string;
}

export function ProgressBar({ barStyle, barPercentage }: ProgressBarProps) {
  const percentage = barPercentage.split('%');

  return (
    <Sty.Container>
      <Sty.Container1 />
      <Sty.Container2 barPercentage={Number(percentage[0])} />
    </Sty.Container>
  );
}
