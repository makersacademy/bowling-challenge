const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
  }

  getFrames() {
    const scores = []
    this.frames.forEach(frame => {
      scores.push(this.#privateCardSymbol(frame));
    });
    return scores;
  }

  addFrame(firstRoll, secondRoll, frame = new Frame) {
    frame.addFirstRoll(firstRoll);
    frame.addSecondRoll(secondRoll);
    this.frames.push(frame);
  }

  frameScore(index) {
    if (index > 9) {
      return 0;
    }
    const frame = this.frames[index];
    return frame.pins() + this.#privateSpareStrikeBonus(frame, index);
  }

  gameScore() {
    let score = 0;
    this.frames.forEach((frame, index) => {
      score += this.frameScore(index);
    });
    return score;
  }

  // private methods

  #privateCardSymbol(frame) {
    const one = frame.getFirstRoll();
    const two = frame.getSecondRoll();
    if (frame.isStrike()) {
      return ["X"];
    } else if (frame.isSpare()) {
      return [one, "/"];
    } else if (two === null) {
      return [one];
    } else {
      return [one,two];
    }
  }

  #privateSpareStrikeBonus(frame, index) {
    if (frame.isSpare()) {
      return this.frames[index+1].getFirstRoll();
    } else if (frame.isStrike()) {
      return this.#privateStrikeBonus(index);
    } else {
      return 0;
    }
  }

  #privateStrikeBonus(index) {
    if (this.frames[index+1].isStrike()) {
      return this.frames[index+1].pins() + this.frames[index+2].getFirstRoll();
    } else {
      return this.frames[index+1].pins();
    }
  }
}

module.exports = Scorecard;