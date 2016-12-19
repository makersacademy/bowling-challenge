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

Frame.prototype.isOver = function() {
  return this.scoreCard.length >= 2;
}

Frame.prototype.getScore = function() {
  var sum = this.scoreCard.reduce((a, b) => a + b, 0);
  return sum;
}

Frame.prototype.isSpare = function() {
  return this.getScore() === 10;
}
