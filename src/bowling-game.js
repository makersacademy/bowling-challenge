function BowlingGame() {
  this.rolls = [];
  this.currentRoll = 0;
}

BowlingGame.prototype.roll = function(pins) {
  this.rolls[this.currentRoll] = pins;
  this.currentRoll += 1;
};

BowlingGame.prototype.getScore = function() {
  var score = 0;
  var rollIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this._isStrike(rollIndex)) {
      score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
      rollIndex += 1;
    } else if (this._isSpare(rollIndex)) {
      score += 10 + this.rolls[rollIndex + 2];
      rollIndex += 2;
    } else {
      score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      rollIndex += 2;
    }
  }
  return score;
};

BowlingGame.prototype._isStrike = function(rollIndex) {
  return this.rolls[rollIndex] === 10;
};

BowlingGame.prototype._isSpare = function(rollIndex) {
  return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
};
