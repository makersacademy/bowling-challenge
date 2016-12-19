'use strict';

function Frame() {
  this.scoreCard = [];
  this.bonus = null;
}

Frame.prototype.addToFrame = function(pins) {
  this.scoreCard.push(pins);
  if (this.isSpare()) {
    this.bonus = new Bonus();
  }
}

Frame.prototype.addToBonus = function(pins) {
  if (this.bonus) {
    if (!this.bonus.isOver()) {
      this.bonus.addToBonus(pins);
    };
  };
}

Frame.prototype.isOver = function() {
  return this.scoreCard.length >= 2;
}

Frame.prototype.getScore = function() {
  var sum = this.scoreCard.reduce((a, b) => a + b, 0);
  return sum
}

Frame.prototype.getTotalScore = function() {
  var sum = this.getScore();
  var bonus = this.getBonusScore();
  return sum + bonus;
}

Frame.prototype.isSpare = function() {
  return this.getScore() === 10;
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
