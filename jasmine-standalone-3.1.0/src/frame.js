'use strict';

function Frame() {
  this.bonus_rolls = [];
  this.rolls = [];
};

Frame.prototype.isStrike = (function() {
  return this.normalRollsScore === 10 && this.rolls.length === 1
});

Frame.prototype.isSpare = (function() {
  return this.normalRollsScore === 10 && this.rolls.length === 2
});

Frame.prototype.isBadLuck = (function() {
  return this.normalRollsScore === 0 && this.rolls.length === 2
});

Frame.prototype.normalRollsScore = (function() {
  return this.rolls.reduce(function(score, roll) {
    return score + roll.score;
  });
});

Frame.prototype.totalScore = (function() {
  var bonusRollsScore = this.bonus_rolls.reduce(function(score, roll) {
    return score + roll.score;
  });
  var normalRollsScore = this.normalRollsScore;
  return bonusRollsScore + normalRollsScore;
});

Frame.prototype.isAwaitingBonus = (function() {
  if(this.isStrike) {
    return this.bonus_rolls.length < 2
  } else if(this.isSpare) {
    return this.bonus_rolls.length < 1
  } else {
    return false
  };
});

Frame.prototype.recordBonusRoll = (function(roll) {
  if(this.isAwaitingBonus) {
    this.bonus_rolls << roll
  };
});

Frame.prototype.recordRoll = (function(roll) {
  var limit = 10 - (this.normalRollsScore)
  if(roll.score <= limit) {
    this.rolls << roll
  };
});

Frame.prototype.canRoll = (function()) {
  if(this.rolls.length === 2) {
    return false
  } else if(this.isStrike) {
    return false
  } else {
    return true
  };
});
