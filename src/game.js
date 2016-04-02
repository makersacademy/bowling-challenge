"use strict";

function Game() {
  this._scores = [];
  this._frameIndex = 0;
  this.PINS_ERROR = "There are only 10 pins per frame."
}

Game.prototype.logRoll = function (pins) {
  this._checkPins(pins);
  this.logFrameScore(pins);
};

Game.prototype.logFrameScore = function (pins) {
  if (this.isFirstRoll(this._frameIndex)) {
    this._scores.push(pins);
  } else {
    this._scores[this._frameIndex] += pins;
    this.newFrame();
  }
};

Game.prototype.isFirstRoll = function (frameIndex) {
  return this._scores[frameIndex] === undefined;
};

Game.prototype.newFrame = function () {
  if (this._frameIndex < 9) {
    this._frameIndex ++;
  }
};

Game.prototype.currentFrame = function () {
  return this._frameIndex ++;
};

Game.prototype._checkPins = function (pins) {
  if (pins > 10 ||
     (!this.isFirstRoll(this._frameIndex) &&
     (this._scores[this._frameIndex] + pins) > 10)) {
    throw new Error(this.PINS_ERROR);
  }
};

Game.prototype.sumScore = function () {
  if (this._scores.length < 1) { return 0; }
  return this._scores.reduce(function (sum, score) {
    return sum + score;
  });
};
