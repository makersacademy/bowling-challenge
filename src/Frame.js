'use strict';

function Frame() {
  this.MAX_SCORE = 10;
  this.rolls = [];
  this.rollCount = 0;
  this.frameCount = 0;
}

Frame.prototype.recordRoll = function(score) {
  this.rolls.push(score);
  this.rollCount += 1;
  if (this.score >= this.MAX_SCORE) {
    return this.score
    this.frameCount += 1;
  }
  else if (this.rollCount > 1) {
    return this.score
    this.frameCount += 1;
  }
};

Frame.prototype.score = function() {
  return this.rolls.reduce((a,b) => a + b, 0)
  // + this.strikeBonus()
};

// Frame.prototype.strikeBonus = function() {
//   if (this.rolls[this.rolls.length - 3] = 10) {
//     return this.rolls[this.rolls.length - 2] + this.rolls[this.rolls.length - 1]
//   } else {
//     return 0
//   }
// };
