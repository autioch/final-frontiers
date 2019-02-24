import { PLANET_ATMOSPHERE, PLANET_GRAVITY, PLANET_HYDROLOGY, PLANET_RESOURCE } from '../types';

export default function planetSetup() {
  const planet = {
    atmoshpere: PLANET_ATMOSPHERE,
    gravity: PLANET_GRAVITY,
    hydrology: PLANET_HYDROLOGY,
    resources: PLANET_RESOURCE,
    geology: '*',
    climate: '*'
  };

  return {
    stateChange: {
      planet
    },
    monthCost: 0
  };
};
