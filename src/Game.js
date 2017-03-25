'use strict';

function Game() {
  this._frames = [];
  this._score = 0;
  this.MAX_FRAMES = 10;
};

Game.prototype._roll = function() {
  return Math.floor(Math.random() * 10);
};

Game.prototype._oneFrame = function() {
  var firstRoll = this._roll();
  var secondRoll = Math.min(this._roll(), 10 - firstRoll);
  return [firstRoll, secondRoll];
};

Game.prototype.getFrame = function(index) {
  return this._frames[index-1];
};

Game.prototype.playNextFrame = function () {
  if(this._frames.length >= 10) {
    return "Sorry, there are only 10 frames per game!"
  };
  var oneFrame = this._oneFrame();
  this._frames.push(oneFrame);
  this._score = oneFrame[0] + oneFrame[1];
};

Game.prototype.currentScore = function () {
  return this._score;
};
