'use strict';

function Frame () {
  this._rolls = [];
  this._rollsCap = 2;
  this._bonusRolls = [];
  this._bonusCap = 0;
  this._isSpare = false;
  this._isStrike = false;
  this._n;
};

// getters
Frame.prototype.normalScore = function() {
  return this._rolls.reduce(function (sum, x) { return sum + x }, 0);
};
Frame.prototype.bonusScore = function() {
  return this._bonusRolls.reduce(function (sum, x) { return sum + x }, 0);
};
Frame.prototype.score = function() {
  return this.normalScore() + this.bonusScore();
};
Frame.prototype.isSpare = function() { return this._isSpare };
Frame.prototype.isStrike = function() { return this._isStrike };
Frame.prototype.n = function() { return this._n };
Frame.prototype.nSet = function(nFrame) { this._n = nFrame };

//setters
Frame.prototype.roll = function(score) {
  if (!this.isFinished()) { this._rolls.push(score) };
  if (!this.isBonusFull()) { this._bonusRolls.push(score) };
  this.specials();
};

//checkers
Frame.prototype.isFinished = function() { return this._rolls.length >= this._rollsCap };
Frame.prototype.isBonusFull = function() { return this._bonusRolls.length >= this._bonusCap};
Frame.prototype.specials = function() {
  this.checkSpare();
  this.checkStrike();
};
Frame.prototype.checkSpare = function() {
  if (this._rollsCap === 2 && this.normalScore() === 10) {
    this._isSpare = true;
    this._bonusCap = 1;
  };
};
Frame.prototype.checkStrike = function() {
  if (this._rolls[0] === 10 && !this.isStrike()) {
    this._isStrike = true;
    this._rollsCap = 1;
    this._bonusCap = 2;
  };
};
