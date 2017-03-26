"use strict";

function BonusFrame(bonus) {
  this.score = 0;
  this.roll = 1;
  this.rolls = this.checkNumRolls(bonus);
  this.endGame = false
  this.scores = []
};

BonusFrame.prototype.addPoints = function(points) {
  this.score += points;
  this.scores.push(points);
};

BonusFrame.prototype.checkNumRolls = function(bonus) {
  if (bonus === "strike") {
    return this.rolls = 2;
  } else if (bonus === "spare") {
    return this.rolls = 1;
  }
};

BonusFrame.prototype.nextRoll = function() {
  if (this.roll === this.rolls) {
    this.endGame = true
  } else {
    this.roll ++;
  }
};
