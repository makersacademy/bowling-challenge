'use strict';

function Game (frameConstructor) {
  this._frameConstructor = frameConstructor;
  this._frames = [new this._frameConstructor];
  this._nFrames = 1;
  this._frames[0].nSet(1);
};

//getters
Game.prototype.frames = function(){ return this._frames };
