/* eslint-disable no-magic-numbers */

const K6 = [1, 2, 3, 4, 5, 6];

const shuffle = () => Math.random() - 0.5;

module.exports = function rollDice(modifier = 0) {
  return K6.sort(shuffle)[0] + modifier;
};
