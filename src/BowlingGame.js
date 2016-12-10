'use strict';

function BowlingGame() {
  this.framesInPlay = [];
  // this.frameIndex = 0
  this.totalScore = 0
}

BowlingGame.prototype.roll = function(knockedPins) {
  if (this.framesInPlay.length === 0) {
    var frame = new Frame(knockedPins)
    this.framesInPlay.push(frame);
  };
};
