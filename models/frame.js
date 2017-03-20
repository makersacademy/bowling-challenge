'use strict';

var PINS = 10;

function Frame() {
  this.pins = PINS;
  this.balls = []
  this.complete = false;
}

Frame.prototype.addBall = function (score) {
  this.balls.push(score);
  this._removePins(score);
  this._checkComplete();
};

Frame.prototype.isComplete = function () {
  return this.complete;
};

Frame.prototype.getFrameScore = function (nextBallOne = 0, nextBallTwo = 0) {
  var score = this.balls.reduce(function(a, b) {
    return a + b;
  }, 0);
  this.balls[0] === 10 ? score = score + nextBallOne + nextBallTwo : score = score;
  return score;
};

Frame.prototype._removePins = function (pins) {
  return this.pins -= pins;
};

Frame.prototype._checkComplete = function () {
  if(this.balls.length > 1 || this.balls[0] == 10){
    this._completeFrame();
  }
};

Frame.prototype._completeFrame = function () {
  this.complete = true;
};
