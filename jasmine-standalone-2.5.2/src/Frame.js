'use strict';

function Frame() {
  this.scoreCard = [];
  this.bonus = null;
}

Frame.prototype.addToFrame = function(pins) {
  this.scoreCard.push(pins);
  this._createBonus();
}

Frame.prototype.addToBonus = function(pins) {
  if (this.bonus) {
    this.bonus.addToBonus(pins);
  };
}

Frame.prototype.isOver = function() {
  return this.scoreCard.length >= 2 || this.isStrike();
}

Frame.prototype.getTotalScore = function() {
  var sum = this._getScore();
  var bonus = this.getBonusScore();
  if (this.isPointsComplete()) {
    return sum + bonus;
  } else {
    return null;
  }
}

Frame.prototype._createBonus = function() {
  if (this.isStrike()) {
    this.bonus = new Bonus("strike");
  } else if (this.isSpare()) {
    this.bonus = new Bonus("spare");
  } else {
    null;
  }
}

Frame.prototype._getScore = function() {
  var sum = this.scoreCard.reduce((a, b) => a + b, 0);
  return sum
}


Frame.prototype.isSpare = function() {
  return this._getScore() === 10 && this.scoreCard.length === 2;
}

Frame.prototype.isStrike = function() {
  return this._getScore() === 10 && this.scoreCard.length === 1;
}

Frame.prototype.hasBonus = function() {
  return this.bonus
}

Frame.prototype.getBonusScore = function() {
  if (this.bonus) {
      return this.bonus.getScore();
    } else {
      return 0;
    }
}

Frame.prototype.getBonusPoints = function(index) {
  if (this.bonus) {
      return this.bonus.scoreCard[index];
    } else {
      return null;
    }
}

Frame.prototype.isPointsComplete = function() {
  if (this.bonus) {
      return this.bonus.isOver();
    } else {
      return this.isOver();
    }
}

Frame.prototype.rollNumber = function() {
  if (this.scoreCard.length === 0) {
    return 1;
  } else if (this.scoreCard.length === 1) {
    return 2;
  } else {
    return 3;
  }
}
