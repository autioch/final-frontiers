/* eslint-disable no-magic-numbers */
import { getCrew, getEquipment, getRobot } from '../calculations';

export default function gameStart(config) {
  const { missionDuration } = config;

  const crew = getCrew();
  const equipment = getEquipment(missionDuration);
  const robot = getRobot(missionDuration);

  return {
    crew,
    equipment,
    robot,
    creature: [],
    artifact: [],
    starMapLocationId: 47,
    missionDuration,
    missionMonth: 0
  };
};
