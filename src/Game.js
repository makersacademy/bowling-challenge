'use strict';

function Game() {
  this._rolls = [];
  this._current = 0;
}

Game.prototype.roll = function(pins){
  this._rolls[this._current++] = pins;
};

Game.prototype.score = function(){
  var score = 0, i;
  for (i = 0; i < this._rolls.length; i++) {
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
