/* eslint-disable no-magic-numbers */
function selectCrew(injuredCrew, hasMedic, isMedicInjured) {
  const maxWounds = hasMedic && !isMedicInjured ? 6 : 4;
  const maxWoundsPerCrew = hasMedic && !isMedicInjured ? 3 : 2;

  return [{
    item: injuredCrew[0],
    wounds: maxWoundsPerCrew
  }];
}

const clone = (el) => JSON.parse(JSON.stringify(el));

module.exports = function spaceHeal(gameState) {
  const injuredCrew = gameState.crew.filter((item) => item.wounds > 0);
  const hasMedic = gameState.crew.some((item) => item.id === 'medic');
  const isMedicInjured = injuredCrew.some((item) => item.id === 'medic');
  const selectedCrew = selectCrew(injuredCrew, hasMedic, isMedicInjured);

  selectedCrew.forEach((heal) => {
    const { item, wounds } = heal;

    item.wounds = item.wounds - wounds;
  });

  return {
    stateChange: {
      crew: clone(gameState.crew)
    },
    monthCost: 1
  };
};
