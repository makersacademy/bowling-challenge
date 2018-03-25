'use strict';

function Game () {
  this._frames = []
};

//getters
Game.prototype.frames = function(){ return this._frames };

//setters
Game.prototype.addFrame = function(frame) { this._frames.push(frame) };

//more complex stuff
Game.prototype.score = function() {
  return this._frames.reduce(function(sum, frame) {
    return sum + frame.score()
  }, 0);
}
