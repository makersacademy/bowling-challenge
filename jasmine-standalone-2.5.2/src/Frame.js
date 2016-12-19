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
