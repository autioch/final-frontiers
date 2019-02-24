import { rollDice } from '../calculations';
import { SPACE_PARAGRAPH } from '../tables';

export default function checkStarMapEvent(moveLength) {
  const result = rollDice() + rollDice();

  if (result > moveLength + 1) { // starting field counts as well
    return false;
  }

  const eventParagraph = SPACE_PARAGRAPH[result];

  return eventParagraph;
};
