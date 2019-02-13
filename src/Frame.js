'use strict';

function Frame() {
  this.MAX_SCORE = 10;
  this.rolls = [];
  this.rollCount = 0;
}

Frame.prototype.roll = function(pins) {
  // console.log(this.score())
  if (this.rollCount > 1) {
    //
    return this.rolls
  }
  else if (this.score() >= this.MAX_SCORE) {
    //
    return this.rolls
  }
  this.rolls.push(pins);
  this.rollCount += 1;
  // console.log("Pass -")
  // console.log(this.rollCount)
  // console.log("Roll Array -")
  // console.log(this.rolls)
  return false
};

Frame.prototype.score = function() {
  return this.rolls.reduce((a,b) => a + b, 0)
};

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
