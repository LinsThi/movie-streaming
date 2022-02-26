import React from 'react';

import type { ProfileDTO } from '~/dtos/NewSeason';

import * as Sty from './styles';

type ProfilesProps = {
  profiles: ProfileDTO[];
};

export function Profiles({ profiles }: ProfilesProps) {
  if (profiles.length <= 3) {
    return (
      <Sty.Container>
        {profiles.map((item, index) => (
          <Sty.ContainerProfile key={item.id}>
            <Sty.ProfileImage
              source={item.profile}
              resizeMode="cover"
              indexProfile={index}
            />
          </Sty.ContainerProfile>
        ))}
      </Sty.Container>
    );
  }
  return (
    <Sty.Container>
      {profiles.map((item, index) => {
        if (index <= 2) {
          return (
            <Sty.ContainerArrayProfile>
              <Sty.ProfileImage
                source={item.profile}
                resizeMode="cover"
                indexProfile={index}
              />
            </Sty.ContainerArrayProfile>
          );
        }
      })}

      <Sty.ProfilesQuantity>+{profiles.length - 3}</Sty.ProfilesQuantity>
    </Sty.Container>
  );
}
