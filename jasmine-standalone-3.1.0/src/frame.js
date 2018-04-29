'use strict';

function Frame(frameNumber) {
  this.bonusRolls = [];
  this.rolls = [];
  this.frameNumber = frameNumber;
};

Frame.prototype.isStrike = (function() {
  return this.normalRollsScore() === 10 && this.rolls.length === 1
});

Frame.prototype.isSpare = (function() {
  return this.normalRollsScore() === 10 && this.rolls.length === 2
});

Frame.prototype.isBadLuck = (function() {
  return this.normalRollsScore() === 0 && this.rolls.length === 2
});

Frame.prototype.normalRollsScore = (function() {
  return this.rolls.reduce(function(score, roll) {
    return score + roll.score;
  }, 0);
});

Frame.prototype.totalScore = (function() {
  var bonusRollsScore = this.bonusRolls.reduce(function(score, roll) {
    return score + roll.score;
  }, 0);
  var normalRollsScore = this.normalRollsScore();
  return bonusRollsScore + normalRollsScore;
});

Frame.prototype.isAwaitingBonus = (function() {
  if(this.isStrike()) {
    return this.bonusRolls.length < 2;
  } else if(this.isSpare()) {
    return this.bonusRolls.length < 1;
  } else {
    return false;
  };
});

Frame.prototype.recordBonusRoll = (function(roll) {
  if(this.isAwaitingBonus()) {
    this.bonusRolls.push(roll);
  } else {
    throw new Error ('frame is not awaiting any bonus roll');
  };;
});

Frame.prototype.recordRoll = (function(roll) {
  var limit = 10 - (this.normalRollsScore());
  if(roll.score <= limit) {
    this.rolls.push(roll);
  } else {
    throw new Error ('score can not be more than limit');
  };
});

Frame.prototype.canRoll = (function() {
  if(this.rolls.length === 2) {
    return false;
  } else if(this.isStrike()) {
    return false;
  } else {
    return true;
  };
});
