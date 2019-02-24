import { CARRY_CAPACITY } from '../tables';
import { PLANET_GRAVITY, TRANSPORT } from '../types';

// import TERRAIN from './types/terrain';

export default function getCarryCapacity(state) {
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
