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
}

module.exports = Scorecard;