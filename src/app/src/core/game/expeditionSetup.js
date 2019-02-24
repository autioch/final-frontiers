import { CARRY_CAPACITY } from '../tables';
import { TRANSPORT } from '../types';

const MIN_RESOURCES = 1;
const MAX_RESOURCES = 30;

function pickExpedition(availableCapacity, crew, equipment, robot) {
  return {
    crew: crew.slice(),
    equipment: equipment.slice(),
    robot: robot.slice(),
    resources: 10
  };
}

export default function expeditionSetup(gameState) {
  const { planet, crew, equipment, robot } = gameState;
  const availableCapacity = CARRY_CAPACITY[planet.gravity][TRANSPORT.SHUTTLE];
  const expedition = pickExpedition(availableCapacity, crew, equipment, robot);

  return {
    stateChange: {
      expedition
    }
  };
};
