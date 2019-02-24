/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
const sumPoints = (arr) => arr.reduce((sum, points) => sum + points, 0);

function calculatePositive(gameState) {
  const calculatedCreatureStatPoints = 0; // TODO
  const creaturePoints = gameState.creature.map((creature) => creature.victoryPoints + 1);
  const artifactPoints = gameState.creature.map((artifact) => artifact.victoryPoints);
  const discoveredPlanetPoints = 0; // TODO
  const paragraphPoints = 0; // TODO

  return calculatedCreatureStatPoints + sumPoints(creaturePoints) + sumPoints(artifactPoints) + discoveredPlanetPoints + paragraphPoints;
}

function calculateNegative(gameState) {
  const deadCrew = gameState.crew.filter((crew) => crew.wounds === crew.hitPoints).map(() => 10);
  const wounds = gameState.crew.filter((crew) => crew.wounds < crew.hitPoints).map((crew) => crew.wounds);
  const destroyedRovers = gameState.equipment.filter((item) => item.id === 'rover' && item.isDestroyed).map(() => 1);
  const destroyedRobot = gameState.robot.filter((item) => item.isDestroyed).map(() => 1);

  // TODO
  const fullyExhausedEquipmentTypes = 0; // TODO

  const { missionDuration, missionMonth } = gameState;
  const extendedMonthsPoints = missionMonth > missionDuration ? (missionMonth - missionDuration) * 5 : 0;

  return sumPoints(deadCrew) + sumPoints(wounds) + sumPoints(destroyedRovers) + sumPoints(destroyedRobot) + fullyExhausedEquipmentTypes + extendedMonthsPoints;
}

export default function calculateVictoryPoints(gameState) {
  const positiveSum = calculatePositive(gameState);
  const negativeSum = calculateNegative(gameState);

  return positiveSum - negativeSum;
};
