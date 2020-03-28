'use strict';

function Game() {
  this.rolls = [];
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

Game.prototype.returnScore = function() {
  var score = 0;
  var rollIndex = 0;
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
      var frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (this.isStrike(rollIndex)) {
        // strike logic (10 + the 2 next rolls)
        score += 10 + this.strikeBonus(rollIndex);
        rollIndex ++
      } else if (this.isSpare(rollIndex)) {
        // spare logic (10 + next roll)
        score += 10 + this.spareBonus(rollIndex);
        rollIndex += 2;
      } else {
        score += frameScore;
        rollIndex += 2;
      }
    }
  return score;
};

Game.prototype.isSpare = function(rollIndex) {
  return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
}

Game.prototype.spareBonus = function(rollIndex) {
  return this.rolls[rollIndex + 2];
}

Game.prototype.isStrike = function(rollIndex) {
  return this.rolls[rollIndex] === 10;
}

Game.prototype.strikeBonus = function(rollIndex) {
  return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
}
