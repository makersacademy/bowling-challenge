'use strict';

function Game() {
  this._rolls = [];
  this._current = 0;
};

Game.prototype.roll = function(pins) {
  this._rolls[this._current++] = pins;
};

Game.prototype.score = function() {
  var score = 0;
  var i;
  var hasBonusRoll = this.hasBonusBall();
  var scoringRolls = (hasBonusRoll) ? hasBonusRoll + 1 : this._rolls.length;

  for (i = 0; i < scoringRolls; i++) {
    if (this.isStrike(i)) {
      score += 10 + this._rolls[i + 1] + this._rolls[i + 2];
    } else if (this.isSpare(i)) {
      score += 10 + this._rolls[i + 2];
      i ++;
      } else {
        score += this._rolls[i];
        }
  };

  return score;
};

Game.prototype.isSpare = function(roll) {
  return ( this._rolls[roll] + this._rolls[roll + 1] ) === 10;
};

Game.prototype.isStrike = function(roll) {
  return ( this._rolls[roll] ) === 10;
};

Game.prototype.hasBonusBall = function (){
  var tenthFrame = this._rolls.length - 3;
  var hasBonus = this.isStrike(tenthFrame) || this.isSpare(tenthFrame);
  return (hasBonus) ? tenthFrame : null;
};
