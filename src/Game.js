'use strict';

function Game() {
  this.rolls = [];
  this.pinsRoll1 = 0;
  this.score = 0;
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

Game.prototype.returnScore = function() {
  var score = 0;
  var rollIndex = 0;
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {

      if (this.isStrike(rollIndex)) {
        // strike logic (10 + the 2 next rolls)
        score += 10 + this.strikeBonus(rollIndex);
        rollIndex++;
      } else if (this.isSpare(rollIndex)) {
        // spare logic (10 + next roll)
        score += 10 + this.spareBonus(rollIndex);
        rollIndex += 2;
      } else {
        // normal frame score (roll 1 + roll 2 != 10)
        score += this.frameScore(rollIndex);
        rollIndex += 2;
      }
    }
  return score;
};

Game.prototype.randomRoll_1 = function() {
  this.pinsRoll1 = Math.floor(Math.random() * 11);
  return this.pinsRoll1;
};

Game.prototype.randomRoll_2 = function() {
  this.pinsRoll2 = Math.floor(Math.random() * (11 - this.pinsRoll1));
  return this.pinsRoll2;
};


// Refactoring to get scores
Game.prototype.frameScore = function(rollIndex) {
  return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
};

Game.prototype.isSpare = function(rollIndex) {
  return this.frameScore(rollIndex) === 10;
};

Game.prototype.spareBonus = function(rollIndex) {
  return this.rolls[rollIndex + 2];
};

Game.prototype.isStrike = function(rollIndex) {
  return this.rolls[rollIndex] === 10;
};

Game.prototype.strikeBonus = function(rollIndex) {
  return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
};
