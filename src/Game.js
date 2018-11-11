var Game = function() {
  this.rolls = [];
  this.currentRoll = 0;
  this.currentScore = 0
};

Game.prototype.roll = function (pins) {
  this.rolls.push(pins);
  this.currentRoll++
};

Game.prototype.score = function () {
  var result = 0;
  var frameIndex = 0;
  var self = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      result += getStrikeScore();
      frameIndex++;
    } else if (isSpare()) {
      result += getSpareScore();
      frameIndex += 2;
    } else {
      result += getNormalScore();
      frameIndex += 2;
    }
  }
  return result;

  function isStrike() {
    return self.rolls[frameIndex] == 10
  }

  function isSpare() {
    return self.rolls[frameIndex] + self.rolls[frameIndex + 1] == 10;
  }

  function getStrikeScore() {
    return self.rolls[frameIndex] + self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
  }

  function getSpareScore() {
    return self.rolls[frameIndex] + self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
  }

  function getNormalScore() {
    return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
  }
  self.currentScore = score;
  return score;
};
