'use strict';

var Frame = function() {
  this._bowls = [null, null];
  this._currentBowl = 0;
  this.remainingPins = 10;
  this._bonusScore = 0;
  this._strikeBonusesAdded = 0;
};

Frame.prototype.bowls = function() {
  return this._bowls;
};

Frame.prototype.bowl = function(pinsAmount) {
  if(this.remainingPins < pinsAmount) throw new Error(`Error - only ${this.remainingPins} pins remaining`);
  if(this._currentBowl === 2 || this.remainingPins === 0) throw new Error('Cannot bowl - this frame is complete');
  this._bowls[this._currentBowl] = pinsAmount;
  this.remainingPins -= pinsAmount;
  this._currentBowl ++
};

Frame.prototype.isComplete = function() {
  return this._currentBowl === 2 || this.isStrike() ? true : false;
};

Frame.prototype.score = function() {
  return this._bowls[0] + this._bowls[1] + this._bonusScore;
};

Frame.prototype.isStrike = function() {
  return this._bowls[0] === 10 ? true : false;
};

Frame.prototype.isSpare = function() {
  return this._bowls[0] !== 10 && this.remainingPins === 0 ? true : false;
};

Frame.prototype.addSpareBonus = function(pinsAmount) {
  if(this._bonusScore === 0) {
    this._bonusScore = pinsAmount;
  };
};

Frame.prototype.addStrikeBonus = function(pinsAmount) {
  if(this._strikeBonusesAdded < 2) {
    this._bonusScore += pinsAmount;
    this._strikeBonusesAdded ++;
  };
};

Frame.prototype.fetchCurrentBowl = function() {
  return this._currentBowl + 1;
};
