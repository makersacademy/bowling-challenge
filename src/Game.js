'use strict';

var Game = function() {
  this._frames = [];
};

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.addNewFrame = function() {
  this._frames.push(new Frame);
}
