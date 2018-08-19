'use strict';

function Game() {
  this.rollHistory = new Array(21); // holds all rolls history (max 21). Index is referred to as roll_index
  this.rollIndex = 0; 
}

Game.prototype.roll = function roll(pins) {
  this.rollHistory[this.rollIndex] = pins;
  this.rollIndex += 1;
  return pins;
};

Game.prototype.score = function score() {
  var score = 0;
  var counter = 0;
  var frame = 0;
  for (frame = 0; frame < 10; frame += 1) {
    if (this._isStrike(counter)) {
      score += 10 + this._strikeBonus(counter);
      counter += 1;
    } else if (this._isSpare(counter)) {
        score += 10 + this._spareBonus(counter);
        counter += 2;
    } else {
        score += this.rollHistory[counter] + this.rollHistory[counter + 1];
        counter += 2;
    }
  }
  return score;
};

Game.prototype._isSpare = function (rollIndex) {
  return (this.rollHistory[rollIndex] + this.rollHistory[rollIndex + 1]) === 10;
};

Game.prototype._isStrike = function (rollIndex) {
  return this.rollHistory[rollIndex] === 10;
};

Game.prototype._spareBonus = function (rollIndex) {
  return this.rollHistory[rollIndex + 2];
};

Game.prototype._strikeBonus = function (rollIndex) {
  return this.rollHistory[rollIndex + 1] + this.rollHistory[rollIndex + 2]
};

