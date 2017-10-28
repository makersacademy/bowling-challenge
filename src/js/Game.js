'use strict';

function Game() {
  this._currentFrame = new Frame();
  this._frames = [];
};

Game.prototype.currentFrame = function () {
  return this._frames.length + 1;
}

Game.prototype.pinsRemaining = function () {
  return this._currentFrame.pinsRemaining();
};

Game.prototype.roll = function (pins) {
  this._currentFrame.roll(pins);
  this._completeRoll();
};

Game.prototype._completeRoll = function () {
  if (this._currentFrame.isComplete()) {
    this._frames.push(this._currentFrame);
    this._currentFrame = new Frame();
  };  

};
