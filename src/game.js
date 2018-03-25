'use strict';

function Game (frameConstructor) {
  this._frameConstructor = frameConstructor
  this._frames = []
};

//getters
Game.prototype.frames = function(){ return this._frames };

//setters
Game.prototype.play = function() { this._frames.push( new this._frameConstructor) };

//more complex stuff
Game.prototype.score = function() {
  return this._frames.reduce(function(sum, frame) {
    return sum + frame.score()
  }, 0);
}
Game.prototype.roll = function(number) {
  this._frames[this._frames.length-1].roll(number);
}

// checkers
Game.prototype.isOver = function() { return this.frames().length >= 10 }
