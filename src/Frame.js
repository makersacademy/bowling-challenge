'use strict';

function Frame() {
  this.MAX_SCORE = 10;
  this.rolls = [];
  this.rollCount = 0;
}

Frame.prototype.roll = function(pins) {
  if (this.rollCount > 1) {
    this.rollCount = 0;
    console.log("frame complete")
    return this.rolls;
  }
  else if (this.score() >= this.MAX_SCORE) {
    this.rollCount = 0;
    console.log("frame complete")
    return this.rolls;
  } else {
    console.log("frame-rolls b4 = " + this.rolls)
    this.rolls.push(pins);
    console.log("frame-rolls = " + this.rolls)
    this.rollCount += 1;
    console.log("rolls count = " + this.rollCount)

    return false;
  }
};

Frame.prototype.score = function() {
  return this.rolls.reduce((a,b) => a + b, 0)
};

Frame.prototype.getRolls = function() {
  return this.rolls;
}

// Frame.prototype.strikeBonus = function() {
//   if (this.rolls[this.rolls.length - 3] = 10) {
//     return this.rolls[this.rolls.length - 2] + this.rolls[this.rolls.length - 1]
//   } else {
//     return 0
//   }
// };

// if (this.score >= this.MAX_SCORE) {
//   this.score()
// }
// else
