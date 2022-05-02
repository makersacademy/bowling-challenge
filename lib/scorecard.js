const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
  }

  getFrames() {
    const scores = []
    this.frames.forEach(frame => {
      const one = frame.getFirstRoll();
      const two = frame.getSecondRoll();
      scores.push([one,two]);
    });
    return scores;
  }

  addFrame(firstRoll, secondRoll, frame = new Frame) {
    const newFrame = frame;
    frame.addFirstRoll(firstRoll);
    frame.addSecondRoll(secondRoll);
    this.frames.push(newFrame);
  }

  frameScore(index) {
    if (index > 9) {
      return 0;
    }
    const frame = this.frames[index];
    let score = 0;
    if (frame.isSpare()) {
      score += this.frames[index+1].getFirstRoll();
    } else if (frame.isStrike() && this.frames[index+1].isStrike()) {
      score += this.frames[index+1].pins();
      score += this.frames[index+2].getFirstRoll();
    } else if (frame.isStrike()) {
      score += this.frames[index+1].pins();
    }
    score += frame.pins();
    return score;
  }

  gameScore() {
    let score = 0;
    this.frames.forEach((frame, index) => {
      score += this.frameScore(index);
    });
    return score;
  }
}

module.exports = Scorecard;