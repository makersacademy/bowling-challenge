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

  currentScore = () => {
    const add = (x, y) => x + y;
    return this.rolls.reduce(add, 0);
  };

  score = () => {
    let index = 0;
    let result = 0;
    let  frameNumber;
    for (frameNumber = 0; frameNumber < 10; frameNumber++) {
      this.frame++;
      if (!this.isStrike(index)) {
        const frameScore = this.rolls[index] + this.rolls[index + 1];
        if (this.isSpare(frameScore)) {
          result += this.spareScore(index);
          index += 2;
        } else {
          result += frameScore;
          index += 2;
        }
      } else {
        result += this.strikeScore(index);
        index += 1;
      }
    }

    return result;
  };

  isSpare = frameScore => {
    return frameScore === this.MAX_SCORE;
  };

  spareScore = index => {
    return this.rolls[index] + this.rolls[index + 1] + this.rolls[index + 2];
  };

  isStrike = index => {
      return this.rolls[index] === this.MAX_SCORE;
    };

  strikeScore = index => {
      return this.MAX_SCORE + this.rolls[index + 1] + this.rolls[index + 2];
    };

  gameOver = () => {
    return this.rolls.count >= 21 || this.frame >= this.MAX_FRAMES;
  };
};
