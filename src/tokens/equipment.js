/* eslint-disable no-magic-numbers */

module.exports = {
  ROVER: {
    id: 'rover',
    type: 'equipment',
    capture: 0,
    fight: 0,
    weight: 20, // only in shuttle
    capacity: '*', // getCarryCapacity
    speed: 10,
    canBeRepaired: true
  },
  CAGE_E: {
    id: 'rover',
    type: 'equipment',
    capture: 0,
    fight: 0,
    weight: 1,
    capacity: '*',
    speed: 0,
    canBeRepaired: false
  },
  TOOLS: {
    id: 'tools',
    type: 'equipment',
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  TOOLS_SPECIAL: {
    id: 'toolsSpecial',
    type: 'equipment',
    capture: 0,
    fight: 0,
    weight: 3,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  SUIT: {
    id: 'suit', // TODO
    type: 'equipment'
  },
  HEAVY_SUIT: {
    id: 'heavySuit',
    type: 'equipment',
    capture: 4,
    fight: 4,
    weight: 9, // only in shuttle or rover
    capacity: 8,
    speed: 7,
    canBeRepaired: true
  },
  STUNNER: {
    id: 'stunner',
    type: 'equipment',
    capture: 6,
    fight: 4,
    weight: 1,
    capacity: 0,
    speed: 0,
    canBeRepaired: false
  },
  DETECTOR: {
    id: 'detector',
    type: 'equipment',
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  PARALYZER: { // not underwater
    id: 'paralyzer',
    type: 'equipment',
    capture: 5,
    fight: 2,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  CLIMBER: {
    id: 'climber',
    type: 'equipment',
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  NEURODETECTOR: {
    id: 'neurodetector',
    type: 'equipment',
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  FIRST_AID_KIT: {
    id: 'firstAidKit',
    type: 'equipment',
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  LASER: {
    id: 'laser',
    type: 'equipment',
    capture: 4,
    fight: 8,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  },
  HOLOAPARAT: {
    id: 'holoaparat',
    type: 'equipment',
    capture: 0,
    fight: 0,
    weight: 2,
    capacity: 0,
    speed: 0,
    canBeRepaired: true
  }
};
