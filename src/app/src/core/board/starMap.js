/* eslint-disable no-magic-numbers */
/* eslint-disable object-curly-newline */
/* eslint-disable object-property-newline */
import { PLANET } from '../tables';

const table = [
  [
    { id: 11, planet: PLANET.KORKRAN },
    { id: 21 },
    { id: 31 },
    { id: 41, planet: PLANET.NEW_ALTO }
  ],
  [
    { id: 12 },
    { id: 22, planet: PLANET.PALEO },
    { id: 32 },
    { id: 42 }
  ],
  [
    { id: 13 },
    { id: 23 },
    { id: 33 },
    { id: 43, planet: PLANET.SUWATTE }
  ],
  [
    { id: 14, planet: PLANET.OPOPLO },
    { id: 24 },
    { id: 34, planet: PLANET.BIRSS },
    { id: 44 }
  ],
  [
    { id: 15 },
    { id: 25, planet: PLANET.PICOLO },
    { id: 35 },
    { id: 45 }
  ],
  [
    { id: 16 },
    { id: 26 },
    { id: 36, planet: PLANET.MEFISTO },
    { id: 46 }
  ],
  [
    { id: 17, planet: PLANET.MEZO },
    { id: 27 },
    { id: 37 },
    { id: 47 }
  ]
];

table.forEach((row, rowIndex) => {
  row.forEach((cell, colIndex) => {
    cell.rowIndex = rowIndex;
    cell.colIndex = colIndex;
  });
});

export default table;
