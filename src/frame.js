// 'use strict';
//
// const STRIKE = 10;
// const SPARE = 10;
// const ALL_PINS = 10;
// const MAX_ROLLS = 3;
// const roll1 = 0;
// const roll2 = 1;
//
// var Frame = function(frame) {
//
// };
//
// Frame.prototype = {
//   isStrike(frame) {
//     return frame[roll1] === STRIKE ? true : false;
//   },
//
//   isSpare(frame) {
//     return frame[roll1] + frame[roll2] === SPARE ? true : false;
//   },
//
//   hasAllBonuses(frame) {
//     if (this.isNeither(frame)) {
//       return true;
//     } else {
//       return frame.length === MAX_ROLLS;
//     }
//   },
//
//   remainingPins(frame) {
//     return !frame[roll2] && frame[roll1] < STRIKE ?
//     ALL_PINS - frame[roll1] : ALL_PINS;
//   }
// }
//
// module.exports = {
//   isStrike: this.isStrike,
//   isSpare: this.isSpare,
//   hasBonus: this.hasBonus,
//   remainingPins: this.remainingPins
// }
