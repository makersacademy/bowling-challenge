'use strict';

function Game (frameConstructor) {
  this._frameConstructor = frameConstructor
  this._frames = [new this._frameConstructor]
};

//getters
Game.prototype.frames = function(){ return this._frames };

//setters

//more complex stuff
Game.prototype.score = function() {
  return this._frames.reduce(function(sum, frame) {
    return sum + frame.score()
  }, 0);
}
Game.prototype.roll = function(number) {
  if (typeof this._frames[this._frames.length-1].roll(number) === "string") {
    this._frames.push(new this._frameConstructor);
  }
}

// checkers
Game.prototype.isOver = function() { return this.frames().length >= 10 }
