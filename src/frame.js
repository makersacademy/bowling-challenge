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

Frame.prototype.isSpare = function() {
  return this._isSpare;
}

Frame.prototype.isStrike = function() {
  return this._isStrike;
}

Frame.prototype.n = function(){
  return this._n;
}

// setters
Frame.prototype.roll = function(score) {
  if (this.illegalRoll()) { return this.illegalRoll() }
  this._rolls.push(score);
  this.specials();
}

Frame.prototype.bonus = function(score) {
  if (this.illegalBonusRoll()) { return this.illegalBonusRoll() }
  this._bonusRolls.push(score);
}

Frame.prototype.nSet = function(nFrame) {
  this._n = nFrame;
}

// checkers
Frame.prototype.illegalRoll = function() {
  if (this.n() == 10 && this._rolls.length === 3) {
    return 'Only three rolls allowed in frame 10!' 
  }
  if (this.n() != 10) {
    if (this._rolls.length === 2) {
      return 'Only two rolls per frame until frame 10!';
    }
    if (this.isStrike() && this._rolls.length === 1) {
      return 'No second roll after strike!';
    }
  }
  return false
}

Frame.prototype.illegalBonusRoll = function() {
  if (!this.isSpare() && !this.isStrike()) {
    return 'Bonus rolls not permitted unless a strike or spare is logged!'
  }
  if (this.isSpare() && this._bonusRolls.length === 1) {
    return 'Only one bonus roll allowed with a spare!';
  }
  return false
}

Frame.prototype.specials = function() {
  if (this._rolls.length === 2 && this.normalScore() === 10) { this._isSpare = true };
  if (this._rolls.length === 1 && this.normalScore() === 10) { this._isStrike = true };
}
