function BowlingGame() {
this.rolls = [];
};

BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
  var result = 0;
  var rollIndex = 0;
  var bowlingGame = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isSpareFrame()) {
      result += spareScore();
    } else {
      result += normalScore();
    }
    rollIndex += 2;
  }
  return result

  function isSpareFrame() {
    return bowlingGame.rolls[rollIndex] + bowlingGame.rolls[rollIndex + 1] == 10
  }

  function spareScore() {
    return bowlingGame.rolls[rollIndex] + bowlingGame.rolls[rollIndex + 1] + bowlingGame.rolls[rollIndex + 2];
  }

  function normalScore() {
    return bowlingGame.rolls[rollIndex] + bowlingGame.rolls[rollIndex + 1];
  }
};
