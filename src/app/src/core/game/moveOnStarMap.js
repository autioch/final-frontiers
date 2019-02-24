function getMove() {
  // TODO
}

export default function moveOnStarMap(gameState) {
  let destinationHex;
  let duration = 0;

  while (!destinationHex || !destinationHex.planet) {
    destinationHex = getMove();
    duration++;
  }

  return {
    stateChange: {
      starMapLocationId: destinationHex.id,
      missionMonth: gameState.missionMonth + duration
    },
    monthCost: duration
  };
};
