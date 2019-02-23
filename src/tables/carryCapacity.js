/* eslint-disable no-magic-numbers */

const GRAVITY = require('../types/gravity');
const TRANSPORT = require('../types/transport');

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
  [GRAVITY.ALMOST_ZERO]: {
    [TRANSPORT.SHUTTLE]: 120,
    [TRANSPORT.ROVER]: 50,
    [TRANSPORT.OTHER]: ensure((val) => val * 2)
  },
  [GRAVITY.SLIGHT]: {
    [TRANSPORT.SHUTTLE]: 100,
    [TRANSPORT.ROVER]: 40,
    [TRANSPORT.OTHER]: ensure((val) => val + 2)
  },
  [GRAVITY.EARTH]: {
    [TRANSPORT.SHUTTLE]: 80,
    [TRANSPORT.ROVER]: 30,
    [TRANSPORT.OTHER]: ensure((val) => val)
  },
  [GRAVITY.LARGE]: {
    [TRANSPORT.SHUTTLE]: 60,
    [TRANSPORT.ROVER]: 20,
    [TRANSPORT.OTHER]: ensure((val) => val - 2)
  },
  [GRAVITY.ENORMOUS]: {
    [TRANSPORT.SHUTTLE]: 30,
    [TRANSPORT.ROVER]: 0,
    [TRANSPORT.OTHER]: ensure((val) => val * 0.5)
  }
};
