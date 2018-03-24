'use strict';
function Score() {
  this.currentTotalScore = 0
  this.previousBonus = 'none'

}

Score.prototype.totalScore = function(frame) {
  if (this.previousBonus === 'spares') {
    return this.currentTotalScore += ((frame.rollOne * 2) + frame.rollTwo);
  } else if (this.previousBonus === 'strike') {
    return this.currentTotalScore += (frame.rollOne + frame.rollTwo) * 2;
  }else {
    return this.currentTotalScore += (frame.rollOne + frame.rollTwo);
  }
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
