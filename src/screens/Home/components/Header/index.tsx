import React from 'react';

import airplay from '~/assets/icons/airplay.png';
import profile_photo from '~/assets/images/dummy_profile/profile_photo.png';
import theme from '~/theme';

import * as Sty from './styles';

export function Header() {
  return (
    <Sty.Container>
      <Sty.Button>
        <Sty.ImageButton source={profile_photo} />
      </Sty.Button>

      <Sty.Button>
        <Sty.ImageButton
          source={airplay}
          style={{
            tintColor: theme.Colors.PRIMARY,
          }}
        />
      </Sty.Button>
    </Sty.Container>
  );
}
