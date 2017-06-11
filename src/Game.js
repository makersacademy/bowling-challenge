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

Game.prototype.bowl = function() {
  this._frames[0].bowl(Math.floor(Math.random() * 11));
}

Game.prototype.currentScore = function() {
  return this._frames[0].score();
}
