import { ENCOUNTER_PARAGRAPH, ENCOUNTER_TYPE } from '../types';
import rollDice from './rollDice';

const MIN_VALUE = -1;
const MAX_VALUE = 8;

const keepInRange = (roll) => Math.min(MIN_VALUE, Math.max(MAX_VALUE, roll));

function getModifier(encounterType, creature) {
  if (encounterType === ENCOUNTER_TYPE.AGREEMENT) {
    return creature.intelligence - Math.abs(creature.aggression);
  }

  if (encounterType === ENCOUNTER_TYPE.FIGHT) {
    return creature.intelligence + creature.aggression;
  }

  if (encounterType === ENCOUNTER_TYPE.ESCAPE) {
    return creature.aggression;
  }

  throw Error('Could not calculate encounter modifier');
}

export default function getEncounterParagraph(state) {
  const { encounterType, creature } = state;
  const modifier = getModifier(encounterType, creature);
  const roll = keepInRange(rollDice(modifier));

  return ENCOUNTER_PARAGRAPH[roll][encounterType];
};
