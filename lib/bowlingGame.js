class BowlingGame {
  constructor() {
    this.score = 0;
    this.frames = [];
    this.frame = [];
    this.spareCounter = 0;
    this.strikeCounter = 0;
  }

  roll(pins) {
    this.frame.push(pins);
    if (this.isStrike(pins)) {
      this.strikeCounter += 10;
      this.frames.push(this.frame);
      this.frame = []
    } else if (this.spareCounter === 10) {
      this.score += this.spareCounter += pins
      this.spareCounter = []
    } else if (this.isSpare()) {
      this.spareCounter += 10;
      this.frame = []
    } else if (this.frame.length === 2) {
      this.frames.push(this.frame);
      this.score += this.frame[0] + this.frame[1];
      this.frame = [];
    } else {
      this.frame
    }
  }
 
  getScore() {
    return this.score;
  }

  isSpare() {
    return this.frame.length === 2 && this.frame[0] + this.frame[1] === 10;
  }

  isStrike(pins) {
    return this.frame.length === 1 && pins == 10;
  }
}

module.exports = BowlingGame