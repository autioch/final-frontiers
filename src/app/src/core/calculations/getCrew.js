import { CREW } from '../tokens';
import { INTELLIGENCE } from '../tables';
import rollDice from './rollDice';

export default function getCrew() {
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
