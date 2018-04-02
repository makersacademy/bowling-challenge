'use strict';

const MAX_FRAME_LIMIT = 10;

function Game(frames = []) {
  this._totalScore = 0;
  this._currentFrameIndex = 0;
  this._frames = frames;
};

Game.prototype.currentFrame = function () {
  return this._frames[this._currentFrameIndex];
};

Game.prototype.isFull = function() {
  return (this._frames.length >= MAX_FRAME_LIMIT) ? true : false;
};

Game.prototype.score = function() {
  this._totalScore = 0;
  let counter = 0;
  let that = this;

  this._frames.forEach(function(frame) {
    that._totalScore += (frame.score() + (frame.bonusScore(that._frames[counter + 1], that._frames[counter + 2])));
    counter++
  });
  return this._totalScore;
};

Game.prototype.roll = function(score) {
  if (this.currentFrame().isFull()) {
    if (this._currentFrameIndex === MAX_FRAME_LIMIT) { return }
    this._currentFrameIndex++
  };
  this.currentFrame().addRound(new Round(score));
};

module.exports = Game;
