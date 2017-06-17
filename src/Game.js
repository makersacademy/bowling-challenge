'use strict';

var Game = function() {
  this._frames = [new Frame];
  this._currentFrame = 0;
  this._score = 0;
};

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.addNewFrame = function() {
  if(this._frames.length < 10) this._frames.push(new Frame);
  this._currentFrame = this._frames.length - 1;
};

Game.prototype.bowl = function(pinsAmount) {
  if(this._frames.length === 10 && this._frames[this._currentFrame].isComplete()) throw new Error('Cannot bowl - game is complete');
  if(!Number.isInteger(pinsAmount) || pinsAmount < 0) throw new Error('Argument must be an integer between 0 and 10');
  this._frames[this._currentFrame].bowl(pinsAmount);
  if(this._frames.length > 1) this.addBonuses(pinsAmount);
  if(this._frames[this._currentFrame].isComplete()) this.addNewFrame();
};

Game.prototype.addBonuses = function(pinsThisTurn) {
  if(this._frames[this._currentFrame - 1].isSpare()) this._frames[this._currentFrame - 1].addSpareBonus(pinsThisTurn);
  if(this._frames[this._currentFrame - 1].isStrike()) {
    this._frames[this._currentFrame - 1].addStrikeBonus(pinsThisTurn);
    if(this._frames.length > 2) this.addDoubleStrikeBonus(pinsThisTurn);
  };
};

Game.prototype.addDoubleStrikeBonus = function(pinsThisTurn) {
  if(this._frames[this._currentFrame - 2].isStrike()) this._frames[this._currentFrame - 2].addStrikeBonus(pinsThisTurn);
}

Game.prototype.calculateScore = function() {
  var score = 0;
  this._frames.forEach(function(frame) {
    score += frame.score();
  });
  this._score = score;
}

Game.prototype.currentScore = function() {
  return this._score;
}
