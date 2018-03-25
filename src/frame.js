'use strict';

function Frame () {
  this._rolls = [];
  this._bonusRolls = [];
  this._isSpare = false;
  this._isStrike = false;
  this._n
};

// getters
Frame.prototype.normalScore = function() {
  return this._rolls.reduce(function (sum, x) { return sum + x }, 0);
}
Frame.prototype.bonusScore = function() {
  return this._bonusRolls.reduce(function (sum, x) { return sum + x }, 0);
}
Frame.prototype.score = function() {
  return this.normalScore() + this.bonusScore();
}
Frame.prototype.isSpare = function() { return this._isSpare };
Frame.prototype.isStrike = function() { return this._isStrike };
Frame.prototype.n = function() { return this._n };
Frame.prototype.nRolls = function() { return this._rolls.length };
Frame.prototype.nBonusRolls = function() { return this._bonusRolls.length };

// setters
Frame.prototype.roll = function(score) {
  if (this.illegalRoll()) { return this.illegalRoll() }
  this._rolls.push(score);
  this.specials();
}
Frame.prototype.bonus = function(score) {
  if (this.illegalBonusRoll()) { return this.illegalBonusRoll() };
  this._bonusRolls.push(score);
}
Frame.prototype.nSet = function(nFrame) {
  this._n = nFrame;
}

// checkers
Frame.prototype.illegalRoll = function() {
  if (this.moreThanThreeAt10()) { return this.moreThanThreeAt10() };
  if (this.moreThanTwoBefore10()) { return this.moreThanTwoBefore10() };
  if (this.secondAfterStrike()) { return this.secondAfterStrike() };
  return false;
}
Frame.prototype.illegalBonusRoll = function() {
  if (this.noSpecialNoBonus()) { return this.noSpecialNoBonus() };
  if (this.secondBonusAfterSpare()) { return this.secondBonusAfterSpare() };
  return false;
}
Frame.prototype.isFrame10 = function() { this.n() === 10 }
Frame.prototype.moreThanThreeAt10 = function() {
  return (this.n() == 10 && this.nRolls() === 3) ?
  'Only three rolls allowed in frame 10!' :
  false;
}
Frame.prototype.moreThanTwoBefore10 = function() {
  return (this.n() != 10 && this.nRolls() === 2) ?
  'Only two rolls per frame until frame 10!' :
  false;
}
Frame.prototype.secondAfterStrike = function() {
  return (this.n() != 10 && (this.isStrike() && this.nRolls() === 1)) ?
  'No second roll after strike!' :
  false;
}
Frame.prototype.noSpecialNoBonus = function() {
  return (!this.isSpare() && !this.isStrike()) ?
  'Bonus rolls not permitted unless a strike or spare is logged!' :
  false;
}
Frame.prototype.secondBonusAfterSpare = function() {
  return (this.isSpare() && this.nBonusRolls() === 1) ?
  'Only one bonus roll allowed with a spare!' :
  false;
}
Frame.prototype.specials = function() {
  if (this._rolls.length === 2 && this.normalScore() === 10) { this._isSpare = true };
  if (this._rolls.length === 1 && this.normalScore() === 10) { this._isStrike = true };
}
