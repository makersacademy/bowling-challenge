'use strict'

const MAX_SCORE = 10;
const MIN_SCORE = 0;
const MAX_ROLLS_NORMAL = 2;

function Frame() {
  this._pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this._frame = [];
};

Frame.prototype.knockDownPins = function(count) {
  this._pins.splice(-count, count);
};

Frame.prototype.isStrike = function () {
  return (this._pins.length === MIN_SCORE);
};

Frame.prototype.isSpare = function() {
  return ((this.rollCount() === MAX_ROLLS_NORMAL) && (this._pins.length === MIN_SCORE))
};

Frame.prototype.rollCount = function () {
  return this._frame.length;
};

// 'use strict'
//
// const MAX_ROUND_LIMIT = 2;
// const MAX_BONUS_ROUND_LIMIT = 3;
// const MAX_SCORE = 10;
//
// function Frame(bonusRound = false) {
//   this._rounds = [];
//   this._isBonusFrame = bonusRound;
//   this._score = 0;
// };
//
// Frame.prototype.addRound = function(round) {
//   this._rounds.push(round);
// };
//
// Frame.prototype.isBonusFrame = function () {
//   return (this._isBonusFrame) ? true : false;
// };
//
// Frame.prototype.isFull = function() {
//   if (this.isBonusFrame()) {
//     if (this.isStrike() || this.isSpare()) {
//       return (this._rounds.length >= MAX_BONUS_ROUND_LIMIT) ? true : false;
//     } else {
//       return (this._rounds.length >= MAX_ROUND_LIMIT) ? true : false;
//     };
//   } else {
//     return (this._rounds.length >= MAX_ROUND_LIMIT || this.isStrike()) ? true : false;
//   };
// };
//
// Frame.prototype.isSpare = function() {
//   if (this._rounds[1] == null) {
//     return false;
//   } else {
//     return ((this._rounds[0].score() + this._rounds[1].score()) === MAX_SCORE) ? true : false;
//   };
// };
//
// Frame.prototype.isStrike = function() {
//   if (this._rounds[0] == null) {
//     return false;
//   } else {
//     return (this._rounds[0].score() === MAX_SCORE) ? true : false;
//   }
// };
//
// Frame.prototype.score = function() {
//   this._score = 0;
//   let that = this;
//
//   this._rounds.forEach(function(round) {
//     that._score += round.score();
//   });
//   return this._score;
// };
//
// Frame.prototype.bonusScore = function(roundAhead = new Round(), nextRoundAhead = new Round()) {
//   if (this.isStrike()) {
//       return roundAhead.score() + nextRoundAhead.score() || 0;
//   } else if (this.isSpare()) {
//     return roundAhead.score() || 0;
//   }
//   return 0;
// };
//

module.exports = Frame;
