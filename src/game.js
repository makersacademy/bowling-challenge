"use strict";

function Game() {
  this._scores = [];
  this._frameIndex = 0;
}

Game.prototype.logRoll = function (pins) {
  this.logFrameScore(pins);
};

Game.prototype.logFrameScore = function (pins) {
  if (this._scores[this._frameIndex] === undefined) {
    this._scores.push(pins);
  } else {
    this._scores[this._frameIndex] += pins;
    this.newFrame();
  }
};

Game.prototype.sumScore = function () {
  if (this._scores.length < 1) { return 0; }
  return this._scores.reduce(function (sum, score) {
    return sum + score;
  });
};

Game.prototype.newFrame = function () {
  if (this._frameIndex < 9) {
    this._frameIndex ++;
  }
};

Game.prototype.currentFrame = function () {
  return this._frameIndex ++;
};
