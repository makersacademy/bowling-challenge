'use strict';

function Frame() {
  this.PINS = 10;
  this.pins = this.PINS;
  this.balls = []
  this.complete = false;
}

Frame.prototype.getFrameScore = function (nextBallOne, nextBallTwo) {
  return 8;
};

Frame.prototype.addBall = function (score) {
  this.balls.push(score);
};

Frame.prototype.completeFrame = function () {
  this.complete = true;
};
