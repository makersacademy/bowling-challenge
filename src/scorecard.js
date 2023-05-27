const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
  }

  addFrame() {
    const rolls = Array.from(arguments);
    const frame = new Frame(rolls);
    this.frames.push(frame);
    this.#updateScores()
  }

  currentScore() {
    return this.calculateScoreUpTo(this.frames.length);
  }

  calculateScoreUpTo(i) {
    const frameSlice = this.frames.slice(0, i + 1)
    return frameSlice.map((frame) => frame.getFrameScore())
    .reduce((sum, num) => {
      return sum += num;
    }, 0)
  }

  #updateScores() {
    for(let i = 0 ; i < this.frames.length - 1 ; i++) {
      if (this.frames[i].getFrameScore() === null) {
        if (this.frames[i].spare()) {
          this.frames[i].scoreWithSpareBonus(this.frames[i + 1]);
        }
      }
    }
  }
}

module.exports = Scorecard;