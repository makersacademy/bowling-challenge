'use strict';
function Score() {
  this.currentTotalScore = 0
  this.previousBonus = 'none'

}

Score.prototype.totalScore = function(frame) {

  return this.currentTotalScore += (frame.rollOne + frame.rollTwo);
}

Score.prototype.giveBonus = function(frame) {
  if (frame.bonusAward() === 'spares') {
    this.previousBonus = 'spares';
  }else if (frame.bonusAward() === 'strike') {
    this.previousBonus = 'strike';
  }else {
    this.previousBonus = 'none';
  }
}

Score.prototype.isPreviousFrameSparesBonus = function(frame) {
  return frame.bonusAward() === 'spares';
}

Score.prototype.isPreviousFrameStrikeBonus = function(frame) {
  return frame.bonusAward() === 'strike';
}

function Frame() {
  this.rollOne = 0;
  this.rollTwo = 0;
  this.bonus = 'none';
  this.BONUS = 10


};

Frame.prototype.play1 = function(pins) {
  return this.rollOne = pins;
};

Frame.prototype.play2 = function(pins) {
  return this.rollTwo = pins;
};

Frame.prototype.currentScore = function(roll) {
  return roll;
};

Frame.prototype.bonusAward = function() {
  if ((this.rollOne === 0 && this.rollTwo !== 0) || (this.rollOne !== 0 && this.rollTwo === 0)
  &&  (this.rollOne + this.rollTwo === this.BONUS)) {
    return this.bonus = 'strike';
  } else if (this.rollOne + this.rollTwo === this.BONUS) {
    return this.bonus = 'spares';
  } else {
    return this.bonus = 'none';
  }
}
Frame.prototype.frameScore = function() {
  return this.rollOne + this.rollTwo;
};



Frame.prototype.bonus = function() {

}
