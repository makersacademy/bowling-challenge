var BowlingGame = function() {
  this.rolls = [];
}

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
}

BowlingGame.prototype.score = function () {
  var currentScore = 0;
  var rollIndex = 0;

  for (var i = 0; i < 10; i++) {
    if (this.rolls[rollIndex] === 10) {
      currentScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
      rollIndex++;
    }
    else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
      currentScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
      rollIndex += 2;
    }
    else {
      currentScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      rollIndex += 2;
    }
    return currentScore;
  }
};
