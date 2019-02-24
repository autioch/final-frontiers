const { rollDice } = require('../calculations');
const { SPACE_PARAGRAPH } = require('../tables');

module.exports = function checkStarMapEvent(moveLength) {
  const result = rollDice() + rollDice();

  if (result > moveLength + 1) { // starting field counts as well
    return false;
  }

  const eventParagraph = SPACE_PARAGRAPH[result];

  return eventParagraph;
};
