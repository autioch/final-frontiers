/* eslint-disable no-magic-numbers */

const { PLANET_GRAVITY } = require('../types');

module.exports = {
  [PLANET_GRAVITY.ALMOST_ZERO]: 30,
  [PLANET_GRAVITY.SLIGHT]: 22,
  [PLANET_GRAVITY.EARTH]: 16,
  [PLANET_GRAVITY.LARGE]: 12,
  [PLANET_GRAVITY.ENORMOUS]: 6
};
