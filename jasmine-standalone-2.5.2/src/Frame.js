'use strict';

function Frame() {
  this.scoreCard = [];
}

Frame.prototype.addToFrame = function(pins) {
  this.scoreCard.push(pins);
}

Frame.prototype.isOver = function() {
  return this.scoreCard.length >= 2;
}

Frame.prototype.getScore = function() {
  var sum = this.scoreCard.reduce((a, b) => a + b, 0);
  return sum;
}
