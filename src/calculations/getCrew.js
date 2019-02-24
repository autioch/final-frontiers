const { CREW } = require('../tokens');
const { INTELLIGENCE } = require('../tables');
const rollDice = require('./rollDice');

module.exports = function getCrew() {
  const crew = Object.values(CREW).map((id, details) => {
    const intelligence = INTELLIGENCE[rollDice()];

    return {
      id,
      details,
      hitPoints: 5, // eslint-disable-line no-magic-numbers
      intelligence
    };
  });

  return crew;
};
