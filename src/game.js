"use strict";

function Game (frame) {
  this._score = 0;
  this._frames = [];
  this._frame = function (firstRoll, secondRoll) {
    return frame || new Frame(firstRoll, secondRoll);
  };
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
  return this._frame (firstRoll, secondRoll);
};

Game.prototype._addScore = function (frame) {
  this._score += frame.score;
};

Game.prototype._addBonus = function (frame) {
  var previousFrame = this._frameWithIndex(-1);
  var penultimateFrame = this._frameWithIndex(-2);
  this._addIfStrike(frame, previousFrame, penultimateFrame);
  this._addIfSpare(frame, previousFrame);
};

Game.prototype._frameWithIndex = function (index) {
  if(this._frameExists(index)) {
    return this._frames[this._frames.length+index];
  }
};

Game.prototype._frameExists = function (index) {
  return this._frames.length > (index + 1);
};

Game.prototype._addIfStrike = function (frame, previousFrame, penultimateFrame) {
  if(this._IsStrike(penultimateFrame) && this._IsStrike(previousFrame)) {
    this._score += frame.firstRoll;
    this._score += frame.score;
  } else if (this._IsStrike(previousFrame)) {
    this._score += frame.score;
  }
};

Game.prototype._addIfSpare = function (frame, previousFrame) {
  if (this._IsSpare(previousFrame)) {
    this._score += frame.firstRoll;
  }
};

Game.prototype._IsStrike = function (frame) {
  return frame != undefined && frame.result() === "strike";
};

Game.prototype._IsSpare = function (frame) {
  return frame != undefined && frame.result() === "spare";
};
