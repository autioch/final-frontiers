import { MISSION_DURATION } from '../types';
import { EQUIPMENT } from '../tokens';

function getShort() {
  return [
    EQUIPMENT.TOOLS_SPECIAL, EQUIPMENT.TOOLS_SPECIAL,
    EQUIPMENT.TOOLS, EQUIPMENT.TOOLS,
    EQUIPMENT.FIRST_AID_KIT, EQUIPMENT.FIRST_AID_KIT,
    EQUIPMENT.DETECTOR, EQUIPMENT.DETECTOR,
    EQUIPMENT.SUIT, EQUIPMENT.SUIT, EQUIPMENT.SUIT, EQUIPMENT.SUIT,
    EQUIPMENT.SUIT, EQUIPMENT.SUIT, EQUIPMENT.SUIT,
    EQUIPMENT.HEAVY_SUIT, EQUIPMENT.HEAVY_SUIT, EQUIPMENT.HEAVY_SUIT,
    EQUIPMENT.LASER, EQUIPMENT.LASER,
    EQUIPMENT.PARALYZER, EQUIPMENT.PARALYZER,
    EQUIPMENT.HOLOAPARAT,
    EQUIPMENT.CLIMBER, EQUIPMENT.CLIMBER,
    EQUIPMENT.NEURODETECTOR,
    EQUIPMENT.ROVER
  ];
}

function getMediumBonus() {
  return [
    EQUIPMENT.TOOLS_SPECIAL,
    EQUIPMENT.TOOLS,
    EQUIPMENT.FIRST_AID_KIT,
    EQUIPMENT.DETECTOR,
    EQUIPMENT.SUIT, EQUIPMENT.SUIT, EQUIPMENT.SUIT, EQUIPMENT.SUIT,
    EQUIPMENT.HEAVY_SUIT, EQUIPMENT.HEAVY_SUIT,
    EQUIPMENT.LASER,
    EQUIPMENT.PARALYZER,
    EQUIPMENT.HOLOAPARAT,
    EQUIPMENT.CLIMBER,
    EQUIPMENT.NEURODETECTOR,
    EQUIPMENT.ROVER
  ];
}

function getLongBonus() {
  return [
    EQUIPMENT.TOOLS_SPECIAL,
    EQUIPMENT.TOOLS,
    EQUIPMENT.FIRST_AID_KIT,
    EQUIPMENT.DETECTOR,
    EQUIPMENT.SUIT, EQUIPMENT.SUIT, EQUIPMENT.SUIT, EQUIPMENT.SUIT,
    EQUIPMENT.HEAVY_SUIT, EQUIPMENT.HEAVY_SUIT,
    EQUIPMENT.LASER,
    EQUIPMENT.PARALYZER,
    EQUIPMENT.HOLOAPARAT,
    EQUIPMENT.CLIMBER,
    EQUIPMENT.NEURODETECTOR,
    EQUIPMENT.ROVER
  ];
}

export default function getEquipment(state) {
  const { missionDuration } = state;

  const equipment = getShort();

  if (missionDuration === MISSION_DURATION.MEDIUM) {
    equipment.push(...getMediumBonus());
  }

  if (missionDuration === MISSION_DURATION.LONG) {
    equipment.push(...getLongBonus());
  }

  return equipment.sort((a, b) => a.id.localeCompare(b.id)).map((item) => ({
    isDamaged: false,
    isDestroyed: false,
    ...item
  }));
};
