'use strict';

function Frame () {
  this.score = 0;
}

Frame.prototype.addToScore = function(pins) {
  this.score = pins
  return 'Score added';
}
