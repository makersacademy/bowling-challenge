class Bowling {
  constructor() {
    this.TEN = 10;
    this.rolls = [];
    this.MAX_FRAMES = this.TEN;
    this.MAX_SCORE = this.TEN;
    this.frame = 0;
  }

  roll = pins => {
    if (this.gameOver()) {
      throw new Error('Game is over!');
      this.rolls.push(pins);
    }

    this.rolls.push(pins);
  };

  score = () => {
    let rollIndex = 0;
    let result = 0;
    let  frameIndex;
    for (frameIndex = 0; frameIndex < 10; frameIndex++) {
      this.frame++;
      if (!this.isStrike(rollIndex)) {
        const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        if (this.isSpare(frameScore)) {
          result += this.spareScore(rollIndex);
          rollIndex += 2;
        } else {
          result += frameScore;
          rollIndex += 2;
        }
      } else {
        result += this.strikeScore(rollIndex);
        rollIndex += 1;
      }
    }

    return result;
  };

  isSpare = frameScore => {
    return frameScore === this.MAX_SCORE;
  };

  spareScore = rollIndex => {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  };

  isStrike = rollIndex => {
      return this.rolls[rollIndex] === this.MAX_SCORE;
    };

  strikeScore = rollIndex => {
      return this.MAX_SCORE + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    };

  gameOver = () => {
    return this.rolls.count >= 21 || this.frame >= this.MAX_FRAMES;
  };
};
