/* eslint-disable no-magic-numbers */
const { PLANET_DISTANCE, PLANET_SIZE } = require('../types');

module.exports = {
  KORKRAN: {
    id: 1,
    distance: PLANET_DISTANCE.BIOSPHERE,
    size: PLANET_SIZE.SMALL
  },
  PICOLO: {
    id: 2,
    distance: PLANET_DISTANCE.BIOSPHERE,
    size: PLANET_SIZE.MINIATURE
  },
  SUWATTE: {
    id: 3,
    distance: PLANET_DISTANCE.BIOSPHERE,
    size: PLANET_SIZE.LARGE
  },
  OPOPLO: {
    id: 4,
    distance: PLANET_DISTANCE.DISTANT,
    size: PLANET_SIZE.ENORMOUS
  },
  MEZO: {
    id: 5,
    distance: PLANET_DISTANCE.DISTANT,
    size: PLANET_SIZE.LARGE
  },
  PALEO: {
    id: 6,
    distance: PLANET_DISTANCE.CLOSE,
    size: PLANET_SIZE.LARGE
  },
  BIRSS: {
    id: 7,
    distance: PLANET_DISTANCE.VERY_DISTANT,
    size: PLANET_SIZE.SMALL
  },
  MEFISTO: {
    id: 8,
    distance: PLANET_DISTANCE.CLOSE,
    size: PLANET_SIZE.SMALL
  },
  NEW_ALTO: {
    id: 9,
    distance: PLANET_DISTANCE.DISTANT,
    size: PLANET_SIZE.SMALL
  }
};
