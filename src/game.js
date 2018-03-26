'use strict';

function Game (frameConstructor) {
  this._frameConstructor = frameConstructor;
  this._frames = [new this._frameConstructor];
  this._frames[0].nSet(this._frames.length);
};

//getters
Game.prototype.frames = function(){ return this._frames };

//setters
Game.prototype.roll = function(score) {
  if (this._frames.slice(-1)[0].isFinished()) {
    this._frames.push(new this._frameConstructor)
    this._nFrames++;
    this._frames.slice(-1)[0].nSet(this._nFrames);
  };
  this._frames.forEach (function (frame) { frame.roll(score) });
}

//checkers
Game.prototype.isFinished = function(){
  return (this._nFrames == 10 && this._frames[10].isFinished())
};
