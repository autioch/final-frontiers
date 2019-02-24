const { CARRY_CAPACITY } = require('../tables');
const { PLANET_GRAVITY, TRANSPORT } = require('../types');

// const TERRAIN = require('./types/terrain');

module.exports = function getCarryCapacity(state) {
  const { gravity, transportType } = state;

  if (gravity === PLANET_GRAVITY.ENORMOUS && transportType === TRANSPORT.ROVER) {
    throw Error('Rover can not be used in enourmous gravity');
  }

  const suggested = CARRY_CAPACITY[gravity][transportType];

  /* TODO
   * Fill in all the rules from the table.
   */

  return suggested;
};
