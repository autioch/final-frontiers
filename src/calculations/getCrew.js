const { CREW } = require('../tokens');
const { INTELLIGENCE } = require('../tables');
const rollDice = require('./rollDice');

module.exports = function getCrew() {
  const crew = Object.values(CREW).map((details) => {
    const intelligence = INTELLIGENCE[rollDice()];

    return {
      ...details,
      hitPoints: 5, // eslint-disable-line no-magic-numbers
      wounds: 0,
      intelligence
    };
  });

  return crew;
};
