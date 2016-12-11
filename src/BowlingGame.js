'use strict';

function BowlingGame() {
  this.framesInPlay = [];
  // this.frameIndex = 0
  this.totalScore = 0;
}

BowlingGame.prototype.roll = function(knockedPins) {
  if (this.framesInPlay.length === 0) {
    var frame = new Frame(knockedPins);
    this.framesInPlay.push(frame);
    frame.rollNumber += 1;
    frame.checkStrike(knockedPins);
  } else if (this.framesInPlay.slice(-1)[0].rollNumber === 1) {
      var frame = this.framesInPlay.slice(-1)[0];
      frame.rollNumber += 1;
      frame.rollTwo = knockedPins;
      frame.checkSpare();
    } else {
        var frame = new Frame(knockedPins);
        this.framesInPlay.push(frame);
        frame.rollNumber += 1;
      };
};
