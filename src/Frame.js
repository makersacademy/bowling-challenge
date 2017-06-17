'use strict';

function Frame() {

  this.MAX_PINS = 10;
  this.frame = [];
}

Frame.prototype.getFrameSize = function () {
  return this.frame.length;
};

Frame.prototype.addBall = function (ball) {
  this.frame.push(ball);
};

Frame.prototype.getFramePartialScore = function () {
  return this.frame.reduce(function (score, ball) {
    return (score + ball.getThrow());
  }, 0);
};

Frame.prototype.isStrike = function () {
  return this.frame[0].getThrow() === this.MAX_PINS;
};
