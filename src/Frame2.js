'use strict';

function Frame() {
  this.rolls = [];
  this.score = 0;
  this.turn = 0;
  this.bonus = 0;
  this.finalFrame = false;
};

Frame.prototype.roll = function(score) {
  this.score += score; // FIXME change to 'pins down'?
  this.rolls.push(score);
  this.turn ++;
};

Frame.prototype.isStrike = function() {
  return (this.rolls[0] === 10)
};

Frame.prototype.isSpare = function() {
  return ((this.rolls[0] + this.rolls[1]) === 10 )
};

Frame.prototype.isOver = function() {
  if (this.finalFrame === true) {
    if (this.rolls.length === 2 && this.score < 10) {
      return true;
    } else if (this.rolls.length === 3) {
      return true;
    } else {
      return false;
    };
  };

  if (this.finalFrame === false) {
  return(this.rolls.length === 2 || this.score === 10)
  };
};

// Frame.prototype.isOver = function() {
//   if (this.finalFrame === false) {
//     return(this.rolls.length === 2 || this.score === 10)
//   } else {
//     return(this.rolls.length === 2 && this.score !== 10)
//   };
// };

// Frame.prototype.finalFrameScoring = function(score) {
//   if (score === 10) {
//     this.score += score;
//     this.rolls.push(score)
//   };
// };
