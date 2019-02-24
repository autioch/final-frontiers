/* eslint-disable no-magic-numbers */

module.exports = {
  ROVER: {
    capture: 0,
    fight: 0,
    weight: 20, // only in shuttle
    capacity: '*', // getCarryCapacity
    speed: 10,
    canBeRepaired: true
  },
  CAGE_E: {
    capture: 0,
    fight: 0,
    weight: 1,
    capacity: '*',
    speed: 0,
    canBeRepaired: false
  },
  TOOLS: {
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  TOOLS_SPECIAL: {
    capture: 0,
    fight: 0,
    weight: 3,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  HEAVY_SUIT: {
    capture: 4,
    fight: 4,
    weight: 9, // only in shuttle or rover
    capacity: 8,
    speed: 7,
    canBeRepaired: true
  },
  STUNNER: {
    capture: 6,
    fight: 4,
    weight: 1,
    capacity: 0,
    speed: 0,
    canBeRepaired: false
  },
  DETECTOR: {
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  PARALYZER: { // not underwater
    capture: 5,
    fight: 2,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  CLIMBER: {
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  NEURODETECTOR: {
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  FIRST_AID_KIT: {
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  LASER: {
    capture: 4,
    fight: 8,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  HOLOAPARAT: {
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  }
};
