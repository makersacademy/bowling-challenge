"use strict";

function Game() {
  this._score = 0;
  this._frames = [];
}

Game.prototype.enterRolls = function (firstRoll, secondRoll) {
  var frame = this._createNewFrame(firstRoll, secondRoll);
  this._addScore (frame);
  this._addBonus (frame);
  this._frames.push (frame);
};

Game.prototype.returnScore = function () {
  return this._score;
};

Game.prototype._createNewFrame = function (firstRoll, secondRoll) {
  return new Frame (firstRoll, secondRoll);
};

Game.prototype._addScore = function (frame) {
  this._score += frame.score;
};

Game.prototype._addBonus = function (frame) {
  var previousFrame = this._previousFrame();
  if (this._IsStrike(previousFrame)) {
    this._score += frame.score;
  } else if (this._IsSpare(previousFrame)) {
    this._score += frame.firstRoll;
  }
};

Game.prototype._previousFrame = function () {
  return this._frames[this._frames.length-1];
};

Game.prototype._IsStrike = function (previousFrame) {
  return this._frames.length > 0 && previousFrame.result() === "strike";
};

Game.prototype._IsSpare = function (previousFrame) {
  return this._frames.length > 0 && previousFrame.result() === "spare";
};
