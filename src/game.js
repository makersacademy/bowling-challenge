'use strict';

function Game (frameConstructor) {
  this._frameConstructor = frameConstructor;
  this._frames = [new this._frameConstructor];
  this._frames[0].nSet(this._frames.length);
};

//getters
Game.prototype.frames = function(){ return this._frames };
Game.prototype.score = function(){
  return this._frames.reduce(function(e,x) { return e + x.score() }, 0);
};
//setters
Game.prototype.roll = function(score) {
  if (this.isFinished()) { return };
  if (this._frames.slice(-1)[0].isFinished() && !this.isFrame10() ) {
    this._frames.push(new this._frameConstructor)
    this._nFrames++;
    this._frames.slice(-1)[0].nSet(this._nFrames);
  };
  this._frames.forEach (function (frame) { frame.roll(score) });
}

//checkers
Game.prototype.isFinished = function(){
  return (this.isFrame10() && this._frames[9].isFullyFinished());
};
Game.prototype.isFrame10 = function(){ return this._frames.length === 10 };

module.exports = Game;
