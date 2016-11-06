'use strict';

function Frame() {
  this.rolls = [];
  this.score = 0
}

Frame.prototype.bowl = function(pins) {
  if (this.score + pins > 10) {
    throw new Error('Please re-enter correct score');
  }
  this.rolls.push(pins);
  this._calculateRawScore();
};

Frame.prototype._calculateRawScore = function () {
  for( var i in this.rolls) {
    if (this.score <=10 ) {
      this.score += this.rolls[i]
    }
  }
};

Frame.prototype.isEndFrame = function() {
  return (this.rolls.length === 2 || this.score === 10);
};
