'use strict';

var Game = function() {
  this._currentFrame = new Frame();
  this._frames = [this._currentFrame];
  this._currentFrameIndex = 0;
  this._lastFrame = null;
  this._score = 0;
};

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.addNewFrame = function() {
  if(this._frames.length < 9) {
    this._frames.push(new Frame);
  } else if(this._frames.length === 9) {
    this._frames.push(new TenthFrame);
  };
  this.updateCurrentFrame();
};

Game.prototype.updateCurrentFrame = function() {
  this._currentFrame = this._frames[this._frames.length - 1];
  this._currentFrameIndex = this._frames.length - 1;
  this._lastFrame = this._frames[this._frames.length - 2];
};

Game.prototype.bowl = function(pinsAmount) {
  if(this._frames.length === 10 && this._currentFrame.isComplete()) throw new Error('Cannot bowl - game is complete');
  if(!Number.isInteger(pinsAmount) || pinsAmount < 0) throw new Error('Argument must be an integer between 0 and 10');
  this._currentFrame.bowl(pinsAmount);
  if(this._frames.length > 1) this.addBonuses(pinsAmount);
  if(this._currentFrame.isComplete()) this.addNewFrame();
};

Game.prototype.addBonuses = function(pinsThisTurn) {
  if(this._lastFrame.isSpare()) this._lastFrame.addSpareBonus(pinsThisTurn);
  if(this._lastFrame.isStrike()) {
    this._lastFrame.addStrikeBonus(pinsThisTurn);
    // This makes sure addDoubleStrikeBonus doesn't get called when we score a strike on the first frame
    // (which would break the program because this._frames[this._currentFrameIndex - 2] doesn't exist yet)
    if(this._frames.length > 2) this.addDoubleStrikeBonus(pinsThisTurn);
  };
};

Game.prototype.addDoubleStrikeBonus = function(pinsThisTurn) {
  if(this._frames[this._currentFrameIndex - 2].isStrike()) this._frames[this._currentFrameIndex - 2].addStrikeBonus(pinsThisTurn);
};

Game.prototype.calculateScore = function() {
  var score = 0;
  this._frames.forEach(function(frame) {
    score += frame.score();
  });
  this._score = score;
};

Game.prototype.currentScore = function() {
  return this._score;
};

Game.prototype.fetchCurrentBowl = function() {
  return "#frame" + (this._currentFrameIndex + 1) + "-bowl" + (this._currentFrame.fetchCurrentBowl());
};
