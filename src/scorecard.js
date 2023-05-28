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

  show() {
    const scorecardArr = this.frames.map(this.format);
    return scorecardArr.join('\n')
  }

  format = (frame) => {
    const round = this.frames.indexOf(frame) + 1;
    return `${round} - rolls: ${frame.rolls} ...... ${this.calculateScoreUpTo(round - 1)}`
  }

  #updateScores() {
    for(let i = 0 ; i < this.frames.length - 1 ; i++) {
      const frame = this.frames[i]
      if (frame.getFrameScore() === null) {
        if (frame.spare()) {
          frame.scoreWithSpareBonus(this.frames[i + 1]);
        } else if (frame.strike()) {
          frame.scoreWithStrikeBonus(
            this.frames[i + 1],
            this.frames[i + 2])
        }
      }
    }
  }
}

module.exports = Scorecard;