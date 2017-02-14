'use strict';

function Game() {
  this._frame = 1;
  this._roll = 1;
  this._pins = 10;
}
Game.prototype.getFrame = function() {return this._frame;};
Game.prototype.getRoll = function() {return this._roll;};
Game.prototype.getPins = function() {return this._pins;};

Game.prototype.setPins = function(hits) {
  this._pins -= hits;
}

Game.prototype.resetFrameRollAndPins = function() {
  if (this.isEndOfFrame()) {
    this.setUpNewFrame()
  } else {
    this.setUpNewRoll();
  }
}
Game.prototype.isEndOfFrame = function() {
  return (this.getRoll() == 2 || this.areNoPinsLeft());
}
Game.prototype.areNoPinsLeft = function() {
  return this.getPins() == 0;
}

Game.prototype.setUpNewFrame = function() {
  this._frame++;
  this._pins = 10;
  this._roll = 1;
}
Game.prototype.setUpNewRoll = function() {
  this._roll = 2;
}

Game.prototype.isOver = function(extraRolls) {
  return (this.getFrame() > 10 && extraRolls == 0);
}
