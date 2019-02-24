/* eslint-disable no-magic-numbers */
const { EXPLORATION_PARAGRAPH } = require('../tables');
const rollDice = require('./rollDice');

module.exports = function getExplorationParagraph(state) {
  const { isForcedMarsh = false, secondTimeAlienCity } = state;

  const firstRoll = rollDice();
  const secondRoll = rollDice();

  if (isForcedMarsh) {
    const modifiedFirst = Math.max(1, firstRoll - 1);
    const modifiedSecond = Math.max(1, secondRoll - 1);

    return EXPLORATION_PARAGRAPH[modifiedFirst][modifiedSecond];
  }

  if (secondTimeAlienCity) {
    const modifiedFirst = Math.min(6, firstRoll + 1);
    const modifiedSecond = Math.min(6, secondRoll + 1);

    return EXPLORATION_PARAGRAPH[modifiedFirst][modifiedSecond];
  }

  return EXPLORATION_PARAGRAPH[firstRoll][secondRoll];
};
