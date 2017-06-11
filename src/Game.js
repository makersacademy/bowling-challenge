'use strict';

var Game = function() {
  this._frames = [new Frame];
  this._currentFrame = 0;
};

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.addNewFrame = function() {
  this._frames.push(new Frame);
  this._currentFrame = this._frames.length - 1;
}

Game.prototype.bowl = function() {
  this._frames[this._currentFrame].bowl(Math.floor(Math.random() * 11));
  if(this._frames[this._currentFrame].isComplete()) this.addNewFrame();
}

Game.prototype.currentScore = function() {
  var score = 0;
  this._frames.forEach(function(frame) {
    score += frame.score();
  });
  return score;
}
