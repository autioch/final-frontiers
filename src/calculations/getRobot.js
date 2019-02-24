const { MISSION_DURATION } = require('../types');
const { ROBOT } = require('../tokens');

function getShort() {
  return [
    ROBOT.SPECBOT, ROBOT.SPECBOT, ROBOT.SPECBOT,
    ROBOT.REKONBOT, ROBOT.REKONBOT, ROBOT.REKONBOT,
    ROBOT.TRANSBOT, ROBOT.TRANSBOT, ROBOT.TRANSBOT,
    ROBOT.REPBOT, ROBOT.REPBOT, ROBOT.REPBOT
  ];
}

function getMediumBonus() {
  return [
    ROBOT.SPECBOT, ROBOT.SPECBOT,
    ROBOT.REKONBOT, ROBOT.REKONBOT,
    ROBOT.TRANSBOT, ROBOT.TRANSBOT,
    ROBOT.REPBOT, ROBOT.REPBOT
  ];
}

function getLongBonus() {
  return [
    ROBOT.SPECBOT,
    ROBOT.REKONBOT,
    ROBOT.TRANSBOT,
    ROBOT.REPBOT
  ];
}

module.exports = function getRobot(state) {
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
