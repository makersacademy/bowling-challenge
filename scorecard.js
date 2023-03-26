const Frame = require('./frame')

class Scorecard {
  constructor() {
    this.frames = []
    this.currentFrameIndex = 0;
  }

  addFrame(firstRoll, secondRoll) {
    const frame = this.createFrame(firstRoll, secondRoll);
    this.frames.push(frame);
    this.currentFrameIndex += 1;
  }

  calculateScore() {
    let score = 0;
    for (let i = 0; i < this.frames.length; i++) {
      const frame = this.frames[i];
      score += frame.getScore();
    }
    return score;
  }

  
  private 

  createFrame(firstRoll, secondRoll) {
    const frame = new Frame();
    if (firstRoll === 10) {
      frame.addRoll(firstRoll);
      frame.markAsStrike();
    } else {
      frame.addRoll(firstRoll);
      frame.addRoll(secondRoll);
    }
    return frame;
  }
}

module.exports = Scorecard;