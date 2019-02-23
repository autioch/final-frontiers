/* eslint-disable no-magic-numbers */

const rollDice = require('./rollDice');
const EXPLORATION_EVENTS = require('./tables/explorationEvents');

module.exports = function getExplorationParagraph(state) {
  const { isForcedMarsh = false, secondTimeAlienCity } = state;

  const firstRoll = rollDice();
  const secondRoll = rollDice();

  if (isForcedMarsh) {
    const modifiedFirst = Math.max(1, firstRoll - 1);
    const modifiedSecond = Math.max(1, secondRoll - 1);

    return EXPLORATION_EVENTS[modifiedFirst][modifiedSecond];
  }

  if (secondTimeAlienCity) {
    const modifiedFirst = Math.min(6, firstRoll + 1);
    const modifiedSecond = Math.min(6, secondRoll + 1);

    return EXPLORATION_EVENTS[modifiedFirst][modifiedSecond];
  }

  return EXPLORATION_EVENTS[firstRoll][secondRoll];
};
