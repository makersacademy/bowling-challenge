function Play() {
this._rolls = [ ];
}

Play.prototype.roll = function (pinsKnocked) {
  this._rolls.push(pinsKnocked);
};

Play.prototype.score = function () {
  var result = 0;
  var rollCount = 0;
  var game = this;

  for (var frameCount = 0; frameCount < 10; frameCount++) {
    if (isStrike()) {
      result += strikeScore()
      rollCount++
    } else if (isSpare()) {
      result += spareScore()
      rollCount += 2
    } else {
      result += normalScore()
      rollCount += 2
    }
    }
  return result;

  function isSpare() {
    return game._rolls[rollCount] + game._rolls[rollCount + 1] == 10
  }

  function isStrike() {
    return game._rolls[rollCount] == 10
  }

  function spareScore() {
    return game._rolls[rollCount] + game._rolls[rollCount + 1] + game._rolls[rollCount + 2];
  }

  function strikeScore() {
    return game._rolls[rollCount] + game._rolls[rollCount + 1] + game._rolls[rollCount + 2];
  }

  function normalScore() {
    return game._rolls[rollCount] + game._rolls[rollCount + 1];
  }
};
