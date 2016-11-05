var BowlingGame = function () {
  this.rolls = [];
  this.currentScore = 0;
}

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10;  frameIndex++) {
    if (game.rolls[rollIndex] === 10) {
      this.currentScore += specialScore();
      rollIndex++
    }
    else if (game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10) {
      this.currentScore += specialScore();
      rollIndex +=2;
    } else {
      this.currentScore += normalScore();
      rollIndex +=2;
    }
  }
  return this.currentScore;

  function specialScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function normalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }

};
