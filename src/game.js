'use strict';

var Game = function(frameClass) {
  this._frameClass = frameClass;
  this._frames = [];
  this._createEmptyFrames();
  this._currentFrame  = 1;
};

Game.prototype._createEmptyFrames = function () {
  for (var i = 1; i <= 10; i++) this._frames.push(new this._frameClass(i));
};

Game.prototype.getFrames = function() {
  return this._frames;
};

Game.prototype.getCurrentFrame = function() {
  return this._currentFrame;
};
