'use strict';

function Frame() {
  this.score = 0;
  this.rollCount = 0;
  this.bonusRollsNeeded = 0;
  this.completion = false;
};

Frame.prototype.roll = function(pins) {
  this._rollCountUp();
  this._increaseScore(pins);
  this._setBonusIfEligible();
  this._completeFrameIfEligible();
};

Frame.prototype.needsBonus = function() {
  return this.bonusRollsNeeded > 0;
};

Frame.prototype.addBonus = function(pins) {
  this._increaseScore(pins);
  this.bonusRollsNeeded--;
};

Frame.prototype.getScore = function() {
  return this.score;
};

Frame.prototype.isComplete = function() {
  return this.completion;
};

// Private implementation

Frame.prototype._setBonusIfEligible = function(){
  if(this.getScore() === 10){
    if(this._getRollCount() === 1){
      this._setStrike();
    } else {
      this._setSpare();
    };
  };
};

Frame.prototype._increaseScore = function(pins) {
  this.score += pins;
};

Frame.prototype._getRollCount = function(){
  return this.rollCount;
};

Frame.prototype._rollCountUp = function() {
  this.rollCount++;
};

Frame.prototype._setStrike = function() {
  this.bonusRollsNeeded = 2;
};

Frame.prototype._setSpare = function() {
  this.bonusRollsNeeded = 1;
};

Frame.prototype._completeFrameIfEligible = function(){
  if(this._getRollCount() === 2 || this.getScore() === 10) {
    this._completeFrame();
  };
};

Frame.prototype._completeFrame = function() {
  this.completion = true;
};
