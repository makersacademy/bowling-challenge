'use strict';

function Game() {
  this._rolls = [];
  this._current = 0;
}

Game.prototype.roll = function(pins){
  this._rolls[this._current++] = pins;
};

Game.prototype.score = function(){
  var score = 0, i, bonusRoll = this._bonusRoll(),
      scoreRolls = (bonusRoll) ? bonusRoll + 1 : this._rolls.length;

  for (i = 0; i < scoreRolls; i++) {
    if (this._strike(i)) {
      score += 10 + this._rolls[i + 1] + this._rolls[i + 2];
      i++;
    } else if (this._spare(i)) {
      score += 10 + this._rolls[i + 2];
      i++;
    } else {
      score += this._rolls[i];
    }
  };
  return score;
};

Game.prototype._spare = function(roll) {
  return (this._rolls[roll] + this._rolls[roll + 1] === 10);
};

Game.prototype._strike = function(roll) {
  return this._rolls[roll] === 10;
};

Game.prototype._bonusRoll = function() {
  var tenthFrame;
  tenthFrame = this._rolls.length - 3, bonus;
  bonus = (this._strike(tenthFrame) || this._spare(tenthFrame))
  return (bonus) ? tenthFrame : null;

};
