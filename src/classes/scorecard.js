const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  getScore() {
    let score = 0;

    for (let i = 0; i < this.frames.length; i++) {
      const frame = this.frames[i];
      score += frame.firstRoll + frame.secondRoll;

      if (frame.isStrike()) {
        if (this.frames[i + 1]) {
          score += this.frames[i + 1].firstRoll + this.frames[i + 1].secondRoll;
        }
      } else if (frame.isSpare()) {
        if (this.frames[i + 1]) {
          score += this.frames[i + 1].firstRoll;
        }
      }
    }

    return score;
  }
}

module.exports = Scorecard;
