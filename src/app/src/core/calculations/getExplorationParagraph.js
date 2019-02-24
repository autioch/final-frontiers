/* eslint-disable no-magic-numbers */
import { EXPLORATION_PARAGRAPH } from '../tables';
import rollDice from './rollDice';

export default function getExplorationParagraph(state) {
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
