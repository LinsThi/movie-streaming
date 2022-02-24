import React from 'react';

import themes from '~/theme';

import * as Sty from './styles';

type TabIconProps = {
  focused: boolean;
  icon: string;
};

function TabIcon({ focused, icon }: TabIconProps) {
  return (
    <Sty.Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Sty.Icon
        source={icon}
        resizeMode="contain"
        style={{
          tintColor: focused ? themes.Colors.PRIMARY : themes.Colors.GRAY,
        }}
      />
    </Sty.Container>
  );
}

export default TabIcon;
