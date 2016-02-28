'use strict';

function Game() {
  this._frames = [];
}

Game.prototype.roll = function (pins) {
  if (typeof pins !== 'number' || pins < 0) {
    throw new Error('Invalid roll');
  }
  try {
    this._currentFrame().roll(pins);
  } catch (exception) {
    throw exception;
  }
};

Game.prototype.calculateScore = function () {
  var score = 0;
  for (var i = 0; i < this._frames.length; i++) {
    score += this._frames[i].getScore();
  }
  return score;
};

Game.prototype._currentFrame = function () {
  var last = this._frames.length - 1;
  var currentFrame = this._frames[last];

  if (typeof currentFrame === 'undefined' || currentFrame.isComplete()) {
    return this._newFrame();
  } else {
    return currentFrame;
  }
};

Game.prototype._newFrame = function () {
  var frame;
  // if (this._frames.length === 9) {
  //   frame = new LastFrame();
  // } else {
  // TODO: || frame arg (spy)
    frame = new Frame();
  // }
  this._frames.push(frame);
  return frame;
};
