/* eslint-disable no-magic-numbers */
const { EXPLORATION, TERRAIN } = require('../types');

const DURATION_KEYS = [
  EXPLORATION.ENTER_FOOT,
  EXPLORATION.ENTER_ROVER,
  EXPLORATION.RESEARCH
];

const DURATIONS = {
  [TERRAIN.PLAINS]: [1, 0.5, 2],
  [TERRAIN.HILLS]: [2, 1, 3],
  [TERRAIN.MOUNTAINS]: [3, 2, 5],
  [TERRAIN.CLIFF]: [5, 0, 8],
  [TERRAIN.VEGETATION_RARE]: [0, 0, 2],
  [TERRAIN.VEGETATION_LUSH]: [2, 2, 5],
  [TERRAIN.CHASM]: [0, 0, 2],
  [TERRAIN.CAVE]: [2, 0, 3],
  [TERRAIN.RIVER]: [0, 0, 2],
  [TERRAIN.LAKE]: [0, 0, 1],
  [TERRAIN.LIQUID_SURFACE]: [4, 1, 5],
  [TERRAIN.LIQUID_BELOW]: [4, 1, 6],
  [TERRAIN.SWAMP]: [2, 0, 5],
  [TERRAIN.GLACIER]: [2, 1, 3],
  [TERRAIN.LAVA_LIQUID]: [0, 0, 0],
  [TERRAIN.LAVA_SOLID]: [2, 2, 4],
  [TERRAIN.ALIEN_STRUCTURE]: [0, 0, 2],
  [TERRAIN.ALIEN_CITY]: [1, 1, 10]
};

const setDict = (dict, key, value) => Object.assign(dict, {
  [key]: value
});

Object.entries(DURATIONS).forEach(([key, value]) => {
  DURATIONS[key] = value.reduce((obj, val, index) => setDict(obj, DURATION_KEYS[index], val), {});
});

module.exports = DURATIONS;
