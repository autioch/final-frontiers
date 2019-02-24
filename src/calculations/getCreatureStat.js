const { CREATURE_STAT } = require('../tables');
const rollDice = require('./rollDice');

module.exports = function getCreatureStat(statValue) {
  const firstRoll = rollDice();
  const firstResult = CREATURE_STAT[firstRoll];

  if (typeof firstResult === 'number') {
    return firstResult + statValue;
  }

  if (typeof firstResult === 'object') {
    const secondRoll = rollDice();

    return firstResult[secondRoll];
  }

  throw Error('Failed to get creature stat.');
};
