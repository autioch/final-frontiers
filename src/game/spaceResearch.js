function selectEquipment(damagedEquipment, hasEngineer) {
  if (hasEngineer) {
    return damagedEquipment.slice();
  }

  return damagedEquipment.slice(0, 1); // TODO
}

function selectRobot(damagedRobot, hasEngineer) {
  if (hasEngineer) {
    return damagedRobot.slice();
  }

  return damagedRobot.slice(0, 1); // TODO
}

const clone = (el) => JSON.parse(JSON.stringify(el));

module.exports = function spaceResearch(gameState) {
  const damagedEquipment = gameState.equipment.filter((item) => item.isDamaged);
  const damagedRobot = gameState.robot.filter((item) => item.isDamaged);

  const hasScientist = gameState.crew.some((item) => item.id === 'scientist');
  const selectedEquipment = selectEquipment(damagedEquipment, hasScientist);
  const selectedRobot = selectRobot(damagedRobot, hasScientist);

  selectedEquipment.forEach((item) => {
    item.isDamaged = false;
  });

  selectedRobot.forEach((item) => {
    item.isDamaged = false;
  });

  return {
    stateChange: {
      equipment: clone(gameState.equipment),
      robot: clone(gameState.robot)
    },
    monthCost: hasScientist ? 0 : 1
  };
};
