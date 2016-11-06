'use strict';

function Game(){
  this._rolls = [];
  this._currentRoll = 0;
  this._currentFrame = 1;
}

Game.prototype.roll = function(pins) {
  this._rolls[this._currentRoll++] = pins;
}

Game.prototype.score = function() {
  var score = 0, scoringRolls = this._scoringRolls();

  for (var i = 0; i < scoringRolls; i++) {
    if (this._isSpare(i)) {
      score += 10 + this._rolls[i + 2];
      i ++;
    } else if (this._isStrike(i)) {
      score += 10 + this._rolls[i + 1] + this._rolls[i + 2];
    }
    else {
      score += this._rolls[i];
    }
  }

  return score;
}

Game.prototype._isSpare = function(roll) {
  return (this._rolls[roll] + this._rolls[roll + 1] === 10);
};

Game.prototype._isStrike = function(roll) {
  return (this._rolls[roll] === 10);
};

Game.prototype._hasBonusRoll = function() {
  var tenthFrame = this._rolls.length - 3, hasBonus;

  hasBonus = (this._isStrike(tenthFrame) || this._isSpare(tenthFrame));

  return (hasBonus) ? tenthFrame : null;
};

Game.prototype._scoringRolls = function () {
  var hasBonusRoll = this._hasBonusRoll()
  return (hasBonusRoll) ? hasBonusRoll + 1 : this._rolls.length;
};
