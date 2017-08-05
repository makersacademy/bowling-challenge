'use strict';

var Game = function(playerName, frameClass, playerClass) {
  this._frameClass = frameClass || Frame;
  this._playerClass = playerClass || Player;

  this._frames = [];
  this._createEmptyFrames();
  this._currentFrame  = 0;

  this._player = new this._playerClass(playerName);

  this._isFirstRoll = true;
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

Game.prototype.getPlayer = function() {
  return this._player;
};

Game.prototype.receiveRoll = function(pins) {
  var frame = this._frames[this._currentFrame];
  this._isFirstRoll ? frame.setFirstRoll(pins) : frame.setSecondRoll(pins);
  this._isFirstRoll = !this._isFirstRoll;
  if (this._isFirstRoll) this._currentFrame += 1;
};
