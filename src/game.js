"use strict";

function Game() {
  this._scores = [];
  this._frames = [];
  this.currentFrame = new Frame();
}

Game.prototype.logRoll = function (pins) {
  this.currentFrame.logRoll(pins);
};


Game.prototype.sumScore = function () {
  if (this._scores.length < 1) { return 0; }
  return this._scores.reduce(function (sum, score) {
    return sum + score;
  });
};
