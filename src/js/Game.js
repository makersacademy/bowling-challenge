'use strict';

function Game() {
  this._frame = new Frame();
  this._frames = [];
};

Game.prototype.currentFrame = function () {
  return this._frames.length + 1;
}

Game.prototype.pinsRemaining = function () {
  return this._frame.pinsRemaining();
};

Game.prototype.roll = function (pins) {
  this._frame.roll(pins);
  this._completeRoll();
};

Game.prototype.currentRoll = function () {
  return this._frame.rollNumber();
};

Game.prototype._completeRoll = function () {

  if (this._frame.isComplete()) {
    this._frames.push(this._frame);
    this._frame = new Frame();
  };  

};
