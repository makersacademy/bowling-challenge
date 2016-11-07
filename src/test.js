function Game() {
  this.rolls = {};
  this.currentRoll = 0;

  Game.prototype.roll = function(pins) {
    rolls[currentRoll] = pins;
  }

  Game.prototype.score() {
    this.score = 0;
    this.frameIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
      if (isStrike(frameIndex)) {
        score += 10 + strikeBonus(frameIndex);
        frameIndex++;
      } else if (isSpare(frameIndex)) {
        score += 10 + spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }

  private boolean isStrike(int frameIndex) {
    return rolls[frameIndex] == 10;
  }

  private int sumOfBallsInFrame(int frameIndex) {
    return rolls[frameIndex] + rolls[frameIndex+1];
  }

  private int spareBonus(int frameIndex) {
    return rolls[frameIndex+2];
  }

  private int strikeBonus(int frameIndex) {
    return rolls[frameIndex+1] + rolls[frameIndex+2];
  }

  private boolean isSpare(int frameIndex) {
    return rolls[frameIndex]+rolls[frameIndex+1] == 10;
  }
}
