'use strict';

function Frame(rolls){
  this._score = 0;
  this.rolls = rolls;
  this.isStrike = false;
  this.isSpare = false;
}

Frame.prototype.firstRoll = function() {
  return this.rolls[0];
};

Frame.prototype.secondRoll = function() {
  return this.rolls[1];
};

Frame.prototype.calculateScore = function() {
  this._score += this.firstRoll() + this.secondRoll();
  if (this.firstRoll() == 10) { this.isStrike = true; }
  if (this._score == 10) {this.isSpare = true; }
};
