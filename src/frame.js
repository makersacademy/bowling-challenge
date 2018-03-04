'use strict';



var Frame = function() {

};

Frame.prototype = {
  isStrike(frame) {
    return frame[roll1] === STRIKE ? true : false;
  },

  isSpare(frame) {
    return frame[roll1] + frame[roll2] === SPARE ? true : false;
  },

  hasBonus(frame) {
    return frame.length === MAX_ROLLS;
  },

  remainingPins(frame) {
    return !frame[roll2] && frame[roll1] < STRIKE ?
    ALL_PINS - frame[roll1] : ALL_PINS;
  }
}

// module.exports = {
//   isStrike: this.isStrike,
//   isSpare: this.isSpare,
//   hasBonus: this.hasBonus,
//   remainingPins: this.remainingPins
// }
