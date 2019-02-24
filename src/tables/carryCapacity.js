/* eslint-disable no-magic-numbers */
const { PLANET_GRAVITY, TRANSPORT } = require('../types');

function ensure(modifierFn) {
  return (entityCapacity) => {
    if (entityCapacity === 0) {
      return 0;
    }

    const desired = modifierFn(entityCapacity);

    return Math.ceil(Math.max(0, desired));
  };
}

module.exports = {
  [PLANET_GRAVITY.ALMOST_ZERO]: {
    [TRANSPORT.SHUTTLE]: 120,
    [TRANSPORT.ROVER]: 50,
    [TRANSPORT.OTHER]: ensure((val) => val * 2)
  },
  [PLANET_GRAVITY.SLIGHT]: {
    [TRANSPORT.SHUTTLE]: 100,
    [TRANSPORT.ROVER]: 40,
    [TRANSPORT.OTHER]: ensure((val) => val + 2)
  },
  [PLANET_GRAVITY.EARTH]: {
    [TRANSPORT.SHUTTLE]: 80,
    [TRANSPORT.ROVER]: 30,
    [TRANSPORT.OTHER]: ensure((val) => val)
  },
  [PLANET_GRAVITY.LARGE]: {
    [TRANSPORT.SHUTTLE]: 60,
    [TRANSPORT.ROVER]: 20,
    [TRANSPORT.OTHER]: ensure((val) => val - 2)
  },
  [PLANET_GRAVITY.ENORMOUS]: {
    [TRANSPORT.SHUTTLE]: 30,
    [TRANSPORT.ROVER]: 0,
    [TRANSPORT.OTHER]: ensure((val) => val * 0.5)
  }
};
